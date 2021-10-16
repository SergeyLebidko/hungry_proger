import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./ProjectsFilter.scss";

function ProjectsFilter({techList, setFilter}) {
    const [all, setAll] = useState(true);
    const [items, setItems] = useState(techList.map(tech => ({select: false, tech})));

    useEffect(() => {
        if (all) {
            setFilter(items.map(({tech}) => tech));
        } else {
            setFilter(items.filter(({select}) => select).map(({tech}) => tech));
        }
    }, [all, items, setFilter]);

    const allClickHandler = () => {
        setAll(true);
        setItems(items => items.map(({tech}) => ({select: false, tech})));
    };

    const itemClickHandler = tech => {
        const nextItems = items.map(item => {
            if (item.tech !== tech) return item;
            return {select: !item.select, tech}
        });
        setAll(!nextItems.some(({select}) => select));
        setItems(nextItems);
    }

    const getItemClasses = select => classNames("projects_filter__item", {"selected_projects_filter_item": select});

    return (
        <ul className="projects_filter">
            <li key="all" className={getItemClasses(all)} onClick={allClickHandler}>Все технологии</li>
            {items.map(
                ({tech, select}) =>
                    <li key={tech} className={getItemClasses(select)} onClick={() => itemClickHandler(tech)}>
                        {tech}
                    </li>
            )}
        </ul>
    );
}

ProjectsFilter.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string),
    setFilter: PropTypes.func
}

export default ProjectsFilter;