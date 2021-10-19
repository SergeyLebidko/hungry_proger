import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import {colorController, L_COLORS} from "./constants/settings";
import './styles/init.scss';

colorController.theme = L_COLORS;

render(<App/>, document.getElementById('root'));