import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./ProjectsFilter.scss";

function ProjectsFilter({techList, setTechFilter}) {
    const [selectorItems, setSelectorItems] = useState(techList.map(tech => ({select: true, tech})));

    useEffect(() => {
        setTechFilter(selectorItems.filter(({select}) => select).map(({tech}) => tech));
    }, [selectorItems]);

    const techClickHandler = tech => setSelectorItems(items =>
        items.map(item => {
            if (item.tech !== tech) return item;
            return {select: !item.select, tech}
        })
    );

    return (
        <ul className="projects_filter">
            {selectorItems.map(
                ({tech, select}) =>
                    <li
                        key={tech}
                        className={classNames("projects_filter__item", {"selected_projects_filter_item": select})}
                        onClick={() => techClickHandler(tech)}
                    >
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