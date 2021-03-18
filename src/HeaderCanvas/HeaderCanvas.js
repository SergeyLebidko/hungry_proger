import React, {Component} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


class HeaderCanvas extends Component {
    componentDidMount() {
        paper.setup(this.refs.myCanvas);
        let {Path, Point, view} = paper;
        let {Circle} = Path;

        let circle;
        for (let index = 0; index < 60; index++) {
            circle = new Circle(Point.random().multiply(view.size), Math.random() * 100);
            circle.fillColor = 'white';
            circle.opacity = Math.random() * 0.4;
        }
    }


    render() {
        let {headerHeight} = this.props;
        let innerStyle = {width: '100%', height: `${headerHeight - 1}px`};
        return <canvas className={style.main_canvas} style={innerStyle} ref="myCanvas"/>;
    }
}

export default HeaderCanvas;