import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {SLIDE_TIMEOUT} from "../../../constants/settings";
import "./PageWrapper.scss";

export const RISE_FROM_RIGHT = 'rfr';
export const LEAVE_TO_LEFT = 'ltl';
export const RISE_FROM_LEFT = 'rfl';
export const LEAVE_TO_RIGHT = 'ltr';

function PageWrapper({children, direction}) {
    const wrapperClasses = classNames(
        "page_wrapper",
        {
            "rise_from_right_wrapper": direction === RISE_FROM_RIGHT,
            "leave_to_left_wrapper": direction === LEAVE_TO_LEFT,
            "rise_from_left_wrapper": direction === RISE_FROM_LEFT,
            "leave_to_right_wrapper": direction === LEAVE_TO_RIGHT
        });

    const wrapperInline = direction ? {animationDuration: `${SLIDE_TIMEOUT}ms`} : {};

    return <div className={wrapperClasses} style={wrapperInline}>{children}</div>;
}

PageWrapper.propTypes = {
    children: PropTypes.object,
    direction: PropTypes.string
}

export default PageWrapper;