import React from 'react';
import Header from '../Header/Header';
import Slider1 from '../Slider1/Slider1';
import Slider2 from '../Slider2/Slider2';
import Slider3 from '../Slider3/Slider3';
import Slider4 from '../Slider4/Slider4';

export function Container() {
    return (
        <div>
            <Header/>
            <Slider1/>
            <Slider2/>
            <Slider3/>
            <Slider4/>
        </div>
    );
}