import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {Path, Point, view} = paper;

        let canvasWidth = view.size.width;
        let canvasHeight = view.size.height;

        let base = 65;
        let border = 3;
        let rectWidth = 2 * border + base;
        let rectHeight = 2 * border + base;

        let xCount = Math.floor(canvasWidth / rectWidth);
        let yCount = Math.floor(canvasHeight / rectHeight);

        let rectsWidth = xCount * rectWidth;
        let rectsHeight = yCount * rectHeight;

        let xStart = (canvasWidth - rectsWidth) / 2;
        let yStart = (canvasHeight - rectsHeight) / 2;

        let rectList = [], rect, startPoint;
        for (let row = 0; row < yCount; row++) {
            for (let col = 0; col < xCount; col++) {
                startPoint = new Point(xStart + rectWidth * col, yStart + rectHeight * row);
                rect = new Path();
                rect.add(startPoint.add(5, 0));
                rect.add(startPoint.add(base - 5, 0));
                rect.add(startPoint.add(base, 5));
                rect.add(startPoint.add(base, base - 5));
                rect.add(startPoint.add(base - 5, base));
                rect.add(startPoint.add(5, base));
                rect.add(startPoint.add(0, base - 5));
                rect.add(startPoint.add(0, 5));
                rect.closed = true;

                rect.onMouseEnter = function (e) {
                    this.fillColor = 'blue';
                }

                rect.onMouseLeave = function (e) {
                    this.fillColor = 'white';
                }

                rect.fillColor = 'white';
                rect.opacity = 0.4;
                rectList.push(rect);
            }
        }
    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;