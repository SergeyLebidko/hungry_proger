import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import style from './HeaderCanvas.module.css';


function HeaderCanvas() {
    let _canvas = useRef(null);

    useEffect(() => {
        paper.setup(_canvas.current);
        let {view, Path, Point} = paper;

        const W = view.size.width;
        const H = view.size.height;

        let segments = [];
        segments.push(new Point(W, H));
        segments.push(new Point(0, H));
        segments.push(new Point(0, H * 0.8));

        let baseLine = H * 0.8;

        let factor = 20;
        for (let index = 1; index < 10; index++) {
            segments.push(new Point(W / 10 * index, baseLine + factor));
            factor *= -1;
        }
        segments.push(new Point(W, H * 0.8));

        let path = new Path(segments);
        path.closed = true;

        let topLeft = new Point(W / 2, baseLine - 30);
        let bottomRight = new Point(W / 2, H);

        path.fillColor = {
            gradient: {
                stops: ['blue', 'deepskyblue']
            },
            origin: topLeft,
            destination: bottomRight
        };
        path.smooth({from: 2, to: 12});

        function getRandomArr() {
            let result = [];
            for (let index = 0; index < 11; index++) {
                result.push(1 - (2 * (index % 2)));
            }
            return result;
        }

        let waves = [
            {
                deltaList: getRandomArr(),
                baseLine,
                wave: path
            }
        ];

        view.onFrame = function () {
            waves.forEach(({deltaList, baseLine, wave}) => {
                for (let index = 2; index <= 12; index++) {
                    wave.segments[index].point.y += deltaList[index - 2];
                    if ((wave.segments[index].point.y > (baseLine + 30)) || (wave.segments[index].point.y < (baseLine - 30))) {
                        deltaList[index - 2] *= -1;
                    }
                }
            });
        }

    }, []);

    return <canvas ref={_canvas} className={style.main_canvas} resize="true"/>;
}

export default HeaderCanvas;