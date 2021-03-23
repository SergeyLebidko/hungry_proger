import React, {useEffect, useContext, useRef, useState} from 'react';
import paper from 'paper';
import {Context} from '../App';
import style from './HeaderCanvas.module.css';
import {searchData} from "../utils";
import {createSaveHeaderCanvasAction, HEADER_CANVAS_DATA_FIELD} from "../store";

const defaultData = {circleList: []};

function getHeaderCanvasData(store, pk) {
    let state = store.getState();
    return searchData(state[HEADER_CANVAS_DATA_FIELD], pk, defaultData);
}

function HeaderCanvas({headerHeight, pk}) {
    let store = useContext(Context);

    let _canvas = useRef(null);
    let _data = useRef(getHeaderCanvasData(store, pk));

    useEffect(() => {
            paper.setup(_canvas.current);
            let {Path, Point, view} = paper;
            let {Circle} = Path;

            let {circleList} = _data.current;
            if (circleList.length === 0) {
                let circle, center, radius, opacity;
                for (let index = 0; index < 50; index++) {
                    center = Point.random().multiply(view.size);
                    radius = Math.random() * 100;
                    opacity = Math.random() * 0.4;
                    circle = new Circle(center, radius);
                    circle.fillColor = 'white';
                    circle.opacity = opacity;
                    circleList.push({center, radius, opacity});
                }
            } else {
                let circle;
                for (let {center, radius, opacity} of circleList) {
                    circle = new Circle(center, radius);
                    circle.fillColor = 'white';
                    circle.opacity = opacity;
                }
            }

            return () => store.dispatch(createSaveHeaderCanvasAction(pk, _data.current));
        }
    );

    let innerStyle = {width: '100%', height: `${headerHeight - 1}px`};
    return <canvas ref={_canvas} className={style.main_canvas} style={innerStyle}/>;
}

export default HeaderCanvas;