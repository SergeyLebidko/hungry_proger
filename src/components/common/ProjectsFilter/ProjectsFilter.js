import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./ProjectsFilter.scss";

function ProjectsFilter({techList, setFilteredValues}) {
    const [all, setAll] = useState(true);
    const [flags, setFlags] = useState(Array(techList.length).fill(false));

    useEffect(() => {
        if (all) {
            setFilteredValues(techList);
        } else {
            setFilteredValues(techList.filter((tech, index) => flags[index]));
        }
    }, [all, flags, setFilteredValues]);

    const allClickHandler = () => {
        setAll(true);
        setFlags(Array(techList.length).fill(false));
    }

    const techClickHandler = tech => {
        let nextFlags = flags.map((flag, index) => techList[index] === tech ? !flag : flag);
        const nextAll = !nextFlags.some(f => f) || nextFlags.every(f => f);
        if (nextAll) nextFlags = Array(techList.length).fill(false);
        setAll(nextAll);
        setFlags(nextFlags);
    }

    const getItemClasses = flag => classNames("projects_filter__item", {"selected_projects_filter_item": flag});

    return (
        <ul className="projects_filter">
            <li key="all" className={getItemClasses(all)} onClick={allClickHandler}>Все технологии</li>
            {techList.map((tech, index) =>
                <li key={tech} className={getItemClasses(flags[index])} onClick={() => techClickHandler(tech)}>
                    {tech}
                </li>
            )}
        </ul>
    );
}

ProjectsFilter.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string),
    setFilteredValues: PropTypes.func
}

export default ProjectsFilter;