import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./PageWrapper.scss";

export const BACK = 'b';
export const FRONT = 'f';

export const RISE_FROM_RIGHT = 'rfr';
export const LEAVE_TO_LEFT = 'ltl';
export const RISE_FROM_LEFT = 'rfl';
export const LEAVE_TO_RIGHT = 'ltr';

function PageWrapper({component, display}) {
    const wrapperClasses = classNames({
        "page_wrapper_back": display === BACK,
        "page_wrapper_front": display === FRONT,
        "rise_from_right_wrapper": display === RISE_FROM_RIGHT,
        "leave_to_left_wrapper": display === LEAVE_TO_LEFT,
        "rise_from_left_wrapper": display === RISE_FROM_LEFT,
        "leave_to_right_wrapper": display === LEAVE_TO_RIGHT
    });

    return <div className={wrapperClasses}>{component}</div>;
}

PageWrapper.propTypes = {
    component: PropTypes.object,
    display: PropTypes.string
}

export default PageWrapper;