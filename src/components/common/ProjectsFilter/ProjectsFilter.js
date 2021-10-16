import React, {useCallback, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./ProjectsFilter.scss";

function ProjectsFilter({techList, setFilter}) {
    const [all, setAll] = useState(true);
    const [items, setItems] = useState(techList.map(tech => ({select: false, tech})));

    const selects = useCallback(({select}) => select, []);
    const itemsNotSelects = useCallback(({tech}) => ({select: false, tech}), []);
    const techs = useCallback(({tech}) => tech, []);

    useEffect(() => {
        if (all) {
            setFilter(items.map(techs));
        } else {
            setFilter(items.reduce((result, item) => item.select ? [item.tech, ...result] : result, []));
        }
    }, [all, items, setFilter]);

    const allClickHandler = () => {
        setAll(true);
        setItems(items => items.map(itemsNotSelects));
    };

    const itemClickHandler = tech => {
        let nextItems = items.map(item => {
            if (item.tech !== tech) return item;
            return {select: !item.select, tech}
        });
        if (nextItems.every(selects)) nextItems = nextItems.map(itemsNotSelects);
        const nextAll = !nextItems.some(selects);

        setAll(nextAll);
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