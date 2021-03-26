import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';

const base = 45;
const border = 1;
const bevel = 3;

function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {Path, Point, view} = paper;

        function getFieldParams(canvasWidth, canvasHeight) {
            let rectWidth = 2 * border + base;
            let rectHeight = 2 * border + base;

            let xCount = Math.floor(canvasWidth / rectWidth);
            let yCount = Math.floor(canvasHeight / rectHeight);

            let rectsWidth = xCount * rectWidth;
            let rectsHeight = yCount * rectHeight;

            let xStart = (canvasWidth - rectsWidth) / 2;
            let yStart = (canvasHeight - rectsHeight) / 2;

            return {xCount, yCount, xStart, yStart, rectWidth, rectHeight}
        }

        function createElements({xCount, yCount, xStart, yStart, rectWidth, rectHeight}) {
            let elementList = [], rect, startPoint;
            for (let row = 0; row < yCount; row++) {
                for (let col = 0; col < xCount; col++) {
                    startPoint = new Point(xStart + rectWidth * col, yStart + rectHeight * row);
                    rect = new Path();
                    rect.add(startPoint.add(bevel, 0));
                    rect.add(startPoint.add(base - bevel, 0));
                    rect.add(startPoint.add(base, bevel));
                    rect.add(startPoint.add(base, base - bevel));
                    rect.add(startPoint.add(base - bevel, base));
                    rect.add(startPoint.add(bevel, base));
                    rect.add(startPoint.add(0, base - bevel));
                    rect.add(startPoint.add(0, bevel));
                    rect.closed = true;

                    rect.onMouseEnter = function () {
                        this.fillColor = 'blue';
                        this.opacity = 0.8;
                    }

                    rect.onMouseLeave = function () {
                        this.fillColor = 'white';
                        this.opacity = 0.3;
                    }

                    rect.fillColor = 'white';
                    rect.opacity = 0.3;
                    elementList.push(rect);
                }
            }
            return elementList;
        }

        let fieldParams = getFieldParams(view.size.width, view.size.height);
        let elementList = createElements(fieldParams);

        let resizeTimeout = null;
        view.onResize = function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                elementList.forEach(element => element.remove());
                fieldParams = getFieldParams(view.size.width, view.size.height);
                elementList = createElements(fieldParams);
            }, 600);
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;