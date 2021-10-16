import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./ProjectsFilter.scss";

function ProjectsFilter({techList, setTechFilter}) {
    const [all, setAll] = useState(true);
    const [selectorItems, setSelectorItems] = useState(techList.map(tech => ({select: false, tech})));

    useEffect(() => {
        if (all) {
            setTechFilter(selectorItems.map(({tech}) => tech));
        } else {
            setTechFilter(selectorItems.filter(({select}) => select).map(({tech}) => tech));
        }
    }, [all, selectorItems, setTechFilter]);

    const allClickHandler = () => {
        setAll(true);
        setSelectorItems(items => items.map(({tech}) => ({select: false, tech})));
    };

    const techClickHandler = tech => {
        const nextItems = selectorItems.map(item => {
            if (item.tech !== tech) return item;
            return {select: !item.select, tech}
        });
        setAll(!nextItems.some(({select}) => select));
        setSelectorItems(nextItems);
    }

    const getItemClasses = select => classNames("projects_filter__item", {"selected_projects_filter_item": select});

    return (
        <ul className="projects_filter">
            <li key="all" className={getItemClasses(all)} onClick={allClickHandler}>Все технологии</li>
            {selectorItems.map(
                ({tech, select}) =>
                    <li key={tech} className={getItemClasses(select)} onClick={() => techClickHandler(tech)}>
                        {tech}
                    </li>
            )}
        </ul>
    );
}

ProjectsFilter.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string),
    setTechFilter: PropTypes.func
}

export default ProjectsFilter;