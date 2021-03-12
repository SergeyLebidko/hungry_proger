import {Component} from 'react';
import paper from 'paper';
import style from './CanvasControl.module.css';


class CanvasControl extends Component {
    componentDidMount() {
        paper.setup(this.refs.myCanvas);
        let {Path, view} = paper;

        let path = new Path();
        path.strokeColor = 'black';
        view.onMouseDown = function (e) {
            path.add(e.point);
            path.smooth();
        }
    }

    render() {
        return (
            <div>
                <canvas width="600" height="600" className={style.main_canvas} ref={"myCanvas"}/>
            </div>
        )
    }
}

export default CanvasControl;