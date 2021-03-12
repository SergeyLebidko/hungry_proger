import React, {Component} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


class HeaderCanvas extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        paper.setup(this.refs.myCanvas);
        let {Path, Point, view} = paper;

        let circle;
        for (let index = 0; index < 10; index++) {
            circle = Path.Circle(Point.random().multiply(view.size), 10);
            circle.strokeColor = 'black';
        }
    }


    render() {
        let {headerHeight} = this.props;
        let innerStyle = {width: '100%', height: `${headerHeight - 1}px`};
        return <canvas className={style.main_canvas} style={innerStyle} ref="myCanvas"/>;
    }
}

export default HeaderCanvas;