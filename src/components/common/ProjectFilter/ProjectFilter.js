import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import ProjectFilterLabel from "../ProjectFilterLabel/ProjectFilterLabel";
import "./ProjectFilter.scss";

function ProjectFilter({techList, setFilteredValues}) {
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

    return (
        <ul className="project_filter">
            <ProjectFilterLabel tech="Все технологии" hasSelected={all} clickHandler={allClickHandler}/>
            {techList.map((tech, index) =>
                <ProjectFilterLabel
                    key={tech}
                    tech={tech}
                    hasSelected={flags[index]}
                    clickHandler={() => techClickHandler(tech)}
                />
            )}
        </ul>
    );
}

ProjectFilter.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string),
    setFilteredValues: PropTypes.func
}

export default ProjectFilter;