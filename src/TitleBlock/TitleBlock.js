import React, {Component} from 'react';
import style from './TitleBlock.module.css';
import {headerHeight} from '../App';


class TitleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hasCursor: true
        }
    }

    componentDidMount() {
        let phrase = 'Сергей Лебидко. Junior web-developer';
        let pos = 1;
        let timer = setInterval(() => {
            if (pos === (phrase.length + 1)) {
                clearInterval(timer);
                this.setState({hasCursor: false});
                return;
            }
            this.setState({
                title: phrase.slice(0, pos)
            });
            pos++;
        }, 100);
    }

    render() {
        let titleBlockStyle = {height: headerHeight}
        let {title, hasCursor} = this.state;
        return (
            <div className={style.title_block} style={titleBlockStyle}>
                <div>
                    <p>{title}{hasCursor ? '|' : ''}</p>
                    <span>Узнать больше</span>
                </div>
            </div>
        )
    }
}

export default TitleBlock;
