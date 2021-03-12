import React, {Component} from 'react';
import style from './HeaderCover.module.css';


class HeaderCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gradient1: this.createGradient(),
            gradient2: this.createGradient(),
            opacity: 1,
            delta: -0.025
        }
    }

    randomChoice(arr) {
        let pos = Math.floor(Math.random() * arr.length);
        return arr[pos];
    }

    createGradient() {
        let colors = [
            'LightSkyBlue',
            'LightPink',
            'PaleGreen',
            'Turquoise',
            'DarkOrchid',
            'GreenYellow',
            'LightSalmon',
            'Cyan',
            'Violet',
            'DeepSkyBlue',
            'OrangeRed',
            'SlateBlue',
            'LightSlateGray'

        ];
        let horizontalPositions = ['left', 'right'];
        let verticalPositions = ['top', 'bottom'];

        let color1, color2;
        color1 = color2 = null;
        while (color1 === color2) {
            color1 = this.randomChoice(colors);
            color2 = this.randomChoice(colors);
        }
        let hPos = this.randomChoice(horizontalPositions);
        let vPos = this.randomChoice(verticalPositions)

        return {backgroundImage: `linear-gradient(to ${hPos} ${vPos}, ${color1}, ${color2})`}
    }

    componentDidMount() {
        setInterval(() => {
            let {opacity, delta, gradient1, gradient2} = this.state;
            opacity += delta;

            if (opacity <= 0) {
                delta *= (-1);
                let gradient = gradient2;
                while (gradient === gradient2) {
                    gradient = this.createGradient();
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
                    gradient = this.createGradient();
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

    render() {
        let {headerHeight} = this.props;
        let {gradient1, gradient2, opacity} = this.state;
        let innerStyle1 = {height: `${headerHeight}px`};
        let innerStyle2 = {height: `${headerHeight}px`};

        Object.assign(innerStyle1, gradient1);
        Object.assign(innerStyle2, gradient2);

        Object.assign(innerStyle2, {opacity});
        return (
            <>
                <div className={style.cover1} style={innerStyle1}/>
                <div className={style.cover2} style={innerStyle2}/>
            </>
        )
    }
}

export default HeaderCover;