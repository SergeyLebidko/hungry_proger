import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


function HeaderCanvas({windowSize}) {
    let _canvas = useRef(null);

    useEffect(() => {
            paper.setup(_canvas.current);
            let {Path, Point, Size, view} = paper;

            /*
            let tool = new Tool();
            tool.minDistance = 150;

            view.onResize = function (e) {
                console.log('Новый размер: ', e.size);
            }

            tool.onMouseDown = function (e) {
                console.log('Кнопку нажали: ', e.count);
            }

            tool.onMouseMove = function (e) {
                console.log('Мышь перетащили: ', e);
            }
            */

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
                        this.fillColor = 'red'
                    }

                    rect.onMouseLeave = function (e) {
                        this.fillColor = 'white'
                    }

                    rect.fillColor = 'white';
                    rect.opacity = 0.4;
                    rectList.push(rect);
                }
            }
        }, []);

    let innerStyle = {width: '100%', height: `${windowSize.windowHeight}px`};
    return <canvas ref={_canvas} className={style.main_canvas} style={innerStyle} resize="true"/>;
}

export default HeaderCanvas;