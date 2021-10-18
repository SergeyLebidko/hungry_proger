import React from "react";
import PropTypes from "prop-types";
import "./PageWrapper.scss";

function PageWrapper({component, line}) {
    let inline = {zIndex: 0, left: 0};

    if (line !== null && line !== undefined) inline = {...inline, zIndex: 1, left: `${line}vw`};

    return (
        <div className="page_wrapper" style={inline}>
            {component}
        </div>
    );
}

PageWrapper.propTypes = {
    component: PropTypes.elementType,
    line: PropTypes.number
}

export default PageWrapper;