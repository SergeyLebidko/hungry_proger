import React, {Component} from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './TitleBlock.module.css';
import {headerHeight} from '../App';


class TitleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hasCursor: false
        }
    }

    startPrintProcess() {
        this.setState({hasCursor: true})
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
        }, 70);
    }

    componentDidMount() {
        setTimeout(() => this.startPrintProcess(), 900);
    }

    render() {
        let titleBlockStyle = {height: headerHeight}
        let {title, hasCursor} = this.state;
        return (
            <div className={style.title_block} style={titleBlockStyle}>
                <div>
                    <p>{title}<span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span></p>
                    <SimpleButton text={"Узнать больше"} delay={3400}/>
                </div>
            </div>
        )
    }
}

export default TitleBlock;
