import React, {useState} from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import style from './Container.module.scss';
import ImageViewer from "../ImageViewer/ImageViewer";

const items = [
    {
        file: 'balloon',
        title: 'Воздушный шар'
    },
    {
        file: 'car',
        title: 'Автомобиль'
    },
    {
        file: 'krasnodar',
        title: 'Краснодар'
    },
    {
        file: 'mountain',
        title: 'Горы'
    },
    {
        file: 'nature',
        title: 'Природа'
    },
    {
        file: 'new_york',
        title: 'Нью-Йорк'
    },
    {
        file: 'sea',
        title: 'Море'
    },
    {
        file: 'sculpture',
        title: 'Статуя'
    }
]

export function Container() {
    let [viewedFile, setViewedFile] = useState(null);

    function imageClickHandler(filename) {
        setViewedFile(filename);
    }

    function closeViewerHandler() {
        setViewedFile(null);
    }

    return (
        <div className={style.container}>
            <Header/>
            <div className={style.card_list}>
                {items.map((item, index) => <Card item={item} clickHandler={imageClickHandler} key={index}/>)}
            </div>
            {viewedFile ? <ImageViewer filename={viewedFile} closeViewerHandler={closeViewerHandler}/> : ''}
        </div>
    )
}
