import {Component} from 'react';

import paper from 'paper';


class CanvasControl extends Component {
    componentDidMount() {
        paper.setup(this.refs.myCanvas);
        let {Path, view} = paper;

        let path = new Path();
        path.strokeColor = 'black';
        view.onMouseDown = function (e) {
            path.add(e.point);
        }
    }

    render() {
        return (
            <div>
                <canvas width="600" height="600" style={{border: "1px solid black"}} ref={"myCanvas"}/>
            </div>
        )
    }
}

export default CanvasControl;