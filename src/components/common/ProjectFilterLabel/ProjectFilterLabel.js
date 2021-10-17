import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./ProjectFilterLabel.scss";

function ProjectFilterLabel({tech, hasSelected, clickHandler}) {
    const labelClasses = classNames("project_filter_label", {"project_filter_label_selected": hasSelected});

    return (
        <li className={labelClasses} onClick={clickHandler}>
            {tech}
        </li>
    );
}

ProjectFilterLabel.propTypes = {
    tech: PropTypes.string,
    hasSelected: PropTypes.bool,
    clickHandler: PropTypes.func
}

export default ProjectFilterLabel;