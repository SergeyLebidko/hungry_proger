import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';
import {randomChoice} from '../utils';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {view, Path, Point, Tool} = paper;

        // Фигуры-искры
        let sparkles = [];
        let sideCounts = [2, 3, 4, 5, 6];
        let sparkle, sideCount, radius, vector, rotateFactor;
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

        // Линии, рамка и "заклепки"
        let W = view.size.width;
        let H = view.size.height;

        let line, lines = [];
        let startFactor = 0.1, endFactor = 0.9, deltaFactor = 0.02;
        for (let factor = startFactor; factor <= endFactor; factor += deltaFactor) {
            line = new Path();
            line.add(new Point(0, H * factor), new Point(W, H * factor))
            line.strokeColor = 'white';
            line.strokeWidth = 1;
            line.opacity = 0.3;
            lines.push(line);
        }

        const frameMargin = 20, frameBevel = 20;

        function createFrame() {
            let result = new Path();
            result.add(
                new Point(frameMargin + frameBevel, frameMargin),
                new Point(W - frameMargin - frameBevel, frameMargin),
                new Point(W - frameMargin, frameMargin + frameBevel),
                new Point(W - frameMargin, H - frameMargin - frameBevel),
                new Point(W - frameMargin - frameBevel, H - frameMargin),
                new Point(frameMargin + frameBevel, H - frameMargin),
                new Point(frameMargin, H - frameMargin - frameBevel),
                new Point(frameMargin, frameMargin + frameBevel)
            );
            result.closed = true;
            result.strokeWidth = 1;
            result.strokeColor = 'white';
            result.opacity = 0.3;
            return result;
        }

        let frame = createFrame();

        function createRivets() {
            let result = [
                new Path.Circle(new Point(2.5 * frameMargin, 2.5 * frameMargin), 10),
                new Path.Circle(new Point(W - 2.5 * frameMargin, 2.5 * frameMargin), 10),
                new Path.Circle(new Point(W - 2.5 * frameMargin, H - 2.5 * frameMargin), 10),
                new Path.Circle(new Point(2.5 * frameMargin, H - 2.5 * frameMargin), 10),
            ];
            result.forEach(rivet => {
                rivet.opacity = 0.3;
                rivet.fillColor = 'white';
            });
            return result;
        }

        let rivets = createRivets();

        // Пересчет положения линий, рамки и "заклепок" при изменении размера окна
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

                frame.remove();
                frame = createFrame();

                rivets.forEach(rivet => rivet.remove());
                rivets = createRivets();
            }, 600);
        }

        // При размонтировании компонента - удаляем объекты с холста
        return () => {
            sparkles.forEach(({sparkle}) => sparkle.remove());
            frame.remove();
            rivets.forEach(rivet => rivet.remove());
            tool.remove();
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;