import React from "react";
import PropTypes from "prop-types";
import "./TechLabel.scss";

const TechLabel = ({tech}) => <li className="tech_label">{tech}</li>;

TechLabel.propTypes = {
    tech: PropTypes.string
}

export default TechLabel;