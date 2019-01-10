import React, { Component } from "react";
import "./style.css";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    render() {
        //console.log(this.props.cardData);
        let image  = require(`../../assets/images/logo${this.props.cardData.num}.png`);
        let stylea = {
            width: "100%",
            height: "142px",
            backgroundImage: "url('"+ image +"')",
            backgroundColor: "#FFFFFF",
            marginTop: "15px",
            marginBottom: "10px"
        };
        return (
            <button onClick={this.props.onClick} className="card" style={stylea} value={this.props.cardData.click.toString()} data-id={this.props.cardData.num} >
                
            </button>
        );
    }
}

export default Card;