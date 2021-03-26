import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {view, Path, Point} = paper;

        let data = [];
        let circle, vector;
        view.onClick = function (event) {
            for (let index = 0; index < 20; index++) {
                circle = new Path.Circle(event.point, 15);
                circle.fillColor = 'white';
                circle.opacity = 0.3;

                vector = Point.random().multiply(5 + Math.random() * 8);
                vector.angle = 180 - Math.random() * 360;
                data.push({circle, vector, onScreen: true});
            }
        }

        view.onFrame = function () {
            for (let index = 0; index < data.length; index++) {
                data[index].circle.position.x += data[index].vector.x;
                data[index].circle.position.y += data[index].vector.y;
                if (!data[index].circle.isInside(view.bounds)) {
                    data[index].circle.remove();
                    data[index].onScreen = false;
                }
            }

            data = data.filter(value => value.onScreen);
        }

    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;