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
        let sideCounts = [3, 4, 5, 6];
        let sparkle, sideCount, radius, vector, rotateFactor;
        let sparkleCount;

        let tool = new Tool();

        function createSparkles(point) {
            sparkleCount = Math.floor(20 + Math.random() * 20);
            for (let index = 0; index < sparkleCount; index++) {
                sideCount = randomChoice(sideCounts);
                radius = 25 * Math.random();
                rotateFactor = 10 - 20 * Math.random();

                sparkle = new Path.RegularPolygon(point, sideCount, radius);
                if (Math.random() * 10 < 5){
                    sparkle.fillColor = 'white';
                } else {
                    sparkle.strokeColor = 'white';
                    sparkle.strokeWidth = 1;
                }
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

        return () => {
            sparkles.forEach(({sparkle}) => sparkle.remove());
            tool.remove();
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;