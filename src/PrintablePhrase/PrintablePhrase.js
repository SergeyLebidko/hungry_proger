import React, {Component} from 'react'
import style from './PrintablePhrase.module.css';


class PrintablePhrase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            hasCursor: false
        }
    }

    startPrintProcess() {
        this.setState({hasCursor: true})
        let {phrase} = this.props;
        let pos = 1;
        let timer = setInterval(() => {
            if (pos === (phrase.length + 1)) {
                clearInterval(timer);
                this.setState({hasCursor: false});
                return;
            }
            this.setState({
                text: phrase.slice(0, pos)
            });
            pos++;
        }, 70);
    }

    componentDidMount() {
        let {delay} = this.props;
        setTimeout(() => this.startPrintProcess(), delay);
    }

    render() {
        let {text, hasCursor} = this.state;
        return (
            <p className={style.phrase}>{text}<span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span></p>
        )
    }
}

export default PrintablePhrase;