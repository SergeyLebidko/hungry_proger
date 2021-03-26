import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';
import {randomChoice} from '../utils';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {view, Path, Point, Tool} = paper;

        let data = [];

        let sideCounts = [2, 3, 4, 5, 6];
        let figure, sideCount, radius, vector, rotateFactor, opacity, color;
        let figureCount;

        let tool = new Tool();

        function createSparkles(point) {
            figureCount = Math.floor(30 + Math.random() * 30);
            for (let index = 0; index < figureCount; index++) {
                sideCount = randomChoice(sideCounts);
                radius = 25 * Math.random();
                rotateFactor = 10 - 20 * Math.random();
                opacity = Math.random() * 0.8;

                figure = new Path.RegularPolygon(point, sideCount, radius);
                figure.fillColor = 'white';
                figure.opacity = opacity;

                vector = Point.random().multiply(5 + Math.random() * 8);
                vector.angle = 180 - Math.random() * 360;
                data.push({figure, rotateFactor, vector, opacity, onScreen: true});
            }
        }

        tool.minDistance = 350;
        tool.onMouseMove = function (event) {
            if (data.length < 200) createSparkles(event.point);
        }

        view.onClick = function (event) {
            if (event.event.button !== 0) return;
            createSparkles(event.point);
        }

        view.onFrame = function () {
            for (let index = 0; index < data.length; index++) {
                data[index].figure.position.x += data[index].vector.x;
                data[index].figure.position.y += data[index].vector.y;
                data[index].figure.rotate(data[index].rotateFactor);
                data[index].figure.opacity = data[index].opacity;
                data[index].opacity -= 0.005;
                if (!data[index].figure.isInside(view.bounds) || data[index].opacity <= 0) {
                    data[index].figure.remove();
                    data[index].onScreen = false;
                }
            }

            data = data.filter(value => value.onScreen);
        }

        // Линии
        const W = view.size.width;
        const H = view.size.height;

        let path;
        for (let factor = 0.05; factor <= 0.95; factor += 0.02) {
            path = new Path();
            path.add(new Point(0, H * factor), new Point(W, H * factor))
            path.strokeColor = 'white';
            path.strokeWidth = 2;
            path.opacity = 0.2;
        }

        return () => {
            data.forEach(({figure}) => figure.remove());
            tool.remove();
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;