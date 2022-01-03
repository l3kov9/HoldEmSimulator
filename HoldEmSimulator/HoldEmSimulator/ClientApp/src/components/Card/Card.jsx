import React, { Component } from 'react';
import './Card.css'
import { SuitMapper } from './Constants';
import Background from './card-back.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    setColor = () => {
        return { "color": this.props.suit === SuitMapper[0] || this.props.suit === SuitMapper[3] ? "black" : "red" }
    }

    render() {
        return (
            <div className="grid-item" style={{ backgroundImage: this.props.isEmpty ? `url(${Background})` : "none" }}>
                <div className="top-left">{this.props.rank}<br />
                    <span style={this.setColor()}>{this.props.suit}</span>
                </div>
                <div className={`${this.setColor().color}-suit`}>{this.props.suit}</div>
                <div></div>
                <div></div>
                <div className={`${this.setColor().color}-suit`}>{this.props.suit}</div>
                <div></div>
                <div></div>
                <div className={`${this.setColor().color}-suit`}>{this.props.suit}</div>
                <div className="bottom-right">{this.props.rank}<br />
                    <span style={this.setColor()}>{this.props.suit}</span>
                </div>
            </div>
        )
    }
}

export default Card;