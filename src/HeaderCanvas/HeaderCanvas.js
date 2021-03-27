import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';
import {randomChoice} from '../utils';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {view, Path, Point, Tool} = paper;

        let sparkles = [];

        let sideCounts = [2, 3, 4, 5, 6];
        let sparkle, sideCount, radius, vector, rotateFactor, opacity;
        let sparkleCount;

        let tool = new Tool();

        function createSparkles(point) {
            sparkleCount = Math.floor(20 + Math.random() * 40);
            for (let index = 0; index < sparkleCount; index++) {
                sideCount = randomChoice(sideCounts);
                radius = 25 * Math.random();
                rotateFactor = 10 - 20 * Math.random();

                sparkle = new Path.RegularPolygon(point, sideCount, radius);
                sparkle.fillColor = 'white';
                sparkle.opacity = Math.random() * 0.8;

                vector = Point.random().multiply(5 + Math.random() * 8);
                vector.angle = 180 - Math.random() * 360;
                sparkles.push({sparkle, rotateFactor, vector, onScreen: true});
            }
        }

        tool.minDistance = 300;
        tool.onMouseMove = function (event) {
            if (sparkles.length < 200) createSparkles(event.point);
        }

        view.onClick = function (event) {
            createSparkles(event.point);
        }

        view.onFrame = function () {
            for (let sparkleData of sparkles) {
                let {sparkle, rotateFactor, vector} = sparkleData;
                sparkle.position.x += vector.x;
                sparkle.position.y += vector.y;
                sparkle.rotate(rotateFactor);
                sparkle.opacity -= 0.005;
                if (!sparkle.isInside(view.bounds) || sparkle.opacity <= 0) {
                    sparkle.remove();
                    sparkleData.onScreen = false;
                }
            }

            sparkles = sparkles.filter(({onScreen}) => onScreen);
        }

        // Линии
        let W = view.size.width;
        let H = view.size.height;

        let line, lines = [];
        let startFactor = 0.05, endFactor = 0.95, deltaFactor = 0.02;
        for (let factor = startFactor; factor <= endFactor; factor += deltaFactor) {
            line = new Path();
            line.add(new Point(0, H * factor), new Point(W, H * factor))
            line.strokeColor = 'white';
            line.strokeWidth = 1;
            line.opacity = 0.3;
            lines.push(line);
        }

        let resizeTimeout;
        view.onResize = function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                W = view.size.width;
                H = view.size.height;
                let factor = startFactor;
                for (let line of lines) {
                    line.firstSegment.point.y = H * factor;
                    line.lastSegment.point.x = W;
                    line.lastSegment.point.y = H * factor;
                    factor += deltaFactor;
                }
            }, 600);
        }

        return () => {
            sparkles.forEach(({sparkle}) => sparkle.remove());
            tool.remove();
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;