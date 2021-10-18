import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./PageWrapper.scss";

const RISE_FROM_RIGHT = 'rfr';
const LEAVE_TO_LEFT = 'ltl';
const RISE_FROM_LEFT = 'rfl';
const LEAVE_TO_RIGHT = 'ltr';

function PageWrapper({component, display}) {
    const wrapperClasses = classNames(
        "page_wrapper",
        {
            "rise_from_right_wrapper": display === RISE_FROM_RIGHT,
            "leave_to_left_wrapper": display === LEAVE_TO_LEFT,
            "rise_from_left_wrapper": display === RISE_FROM_LEFT,
            "leave_to_right_wrapper": display === LEAVE_TO_RIGHT
        }
    );

    return <div className={wrapperClasses}>{component}</div>;
}

PageWrapper.propTypes = {
    component: PropTypes.elementType,
    display: PropTypes.string
}

export default PageWrapper;