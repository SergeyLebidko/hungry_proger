import React, {Component} from 'react';
import {createGradient} from '../utils';
import style from './HeaderCover.module.css';


class HeaderCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gradient1: createGradient(),
            gradient2: createGradient(),
            opacity: 1,
            delta: -0.025
        }
        this.timer = null;
    }

    startTimer() {
        this.timer = setInterval(() => {
            let {opacity, delta, gradient1, gradient2} = this.state;
            opacity += delta;

            if (opacity <= 0) {
                delta *= (-1);
                let gradient = gradient2;
                while (gradient === gradient2) {
                    gradient = createGradient();
                }
                this.setState({
                    delta,
                    gradient2: gradient
                });
                return
            }

            if (opacity >= 1) {
                delta *= (-1);
                let gradient = gradient1;
                while (gradient === gradient1) {
                    gradient = createGradient();
                }
                this.setState({
                    delta,
                    gradient1: gradient
                });
                return;
            }

            this.setState({opacity});
        }, 250);
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    componentDidMount() {
        this.startTimer();
    }

    render() {
        let {headerHeight} = this.props;
        let {gradient1, gradient2, opacity} = this.state;
        let innerStyle1 = {height: `${headerHeight}px`};
        let innerStyle2 = {height: `${headerHeight}px`};

        Object.assign(innerStyle1, gradient1);
        Object.assign(innerStyle2, gradient2, {opacity});

        // Object.assign(innerStyle2, {opacity});
        return (
            <>
                <div className={style.cover1} style={innerStyle1}/>
                <div className={style.cover2} style={innerStyle2}/>
            </>
        )
    }
}

export default HeaderCover;