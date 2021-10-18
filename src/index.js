import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import {applyPreset} from "./utils/utils";
import {COLOR_PRESETS, L_COLORS} from "./constants/settings";
import './styles/init.scss';

applyPreset(COLOR_PRESETS[L_COLORS]);

render(<App/>, document.getElementById('root'));