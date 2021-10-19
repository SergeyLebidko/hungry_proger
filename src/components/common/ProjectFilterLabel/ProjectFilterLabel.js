import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./ProjectFilterLabel.scss";

function ProjectFilterLabel({tech, hasSelected, clickHandler, labelInline = {}}) {
    const labelClasses = classNames("project_filter_label", {"project_filter_label_selected": hasSelected});

    return (
        <li className={labelClasses} style={labelInline} onClick={clickHandler}>
            {tech}
        </li>
    );
}

ProjectFilterLabel.propTypes = {
    tech: PropTypes.string,
    hasSelected: PropTypes.bool,
    clickHandler: PropTypes.func,
    labelInline: PropTypes.object
}

export default ProjectFilterLabel;