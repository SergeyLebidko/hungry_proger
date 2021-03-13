import React, {Component} from 'react';
import style from './SimpleButton.module.css';


class SimpleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        }
    }

    startAppearance() {
        let timer = setInterval(() => {
            let {opacity} = this.state;
            opacity += 0.1;
            if (opacity > 1) {
                clearInterval(timer);
                return
            }
            this.setState({opacity});
        }, 120);
    }

    componentDidMount() {
        let {delay} = this.props;
        if (delay === 0) {
            this.setState({opacity: 0});
            return;
        }
        setTimeout(() => this.startAppearance(), delay);
    }

    render() {
        let {text} = this.props;
        let {opacity} = this.state;
        return (
            <span className={style.simple_button} style={{opacity}}>{text}</span>
        )
    }
}

export default SimpleButton;