import React, { Component } from "react";
import Navbar from "../navbar";
import Header from "../header";
import Container from "../main";
import Card from "../card";
import Footer from "../footer";
const cardArray = [
    {
        "num": "1",
        "click": false
    },
    {
        "num": "2",
        "click": false
    },
    {
        "num": "3",
        "click": false
    },
    {
        "num": "4",
        "click": false
    },
    {
        "num": "5",
        "click": false
    },
    {
        "num": "6",
        "click": false
    },
    {
        "num": "7",
        "click": false
    },
    {
        "num": "8",
        "click": false
    },
    {
        "num": "10",
        "click": false
    }
];
class ClickyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {cards:this.getInitialState(),lastGuess:""};
    }
    
    getInitialState() {
        return {
            cards: cardArray,
            maxStats: 0,
            stats: 0
        };
    }

    lostGame = () => {
        console.log("valiste verga morro");
        let newState = {};
        newState.cards = cardArray;
        newState.maxStats = this.state.cards.maxStats;
        newState.stats = 0;
        this.setState(() => ({
            cards: newState,
            lastGuess:"Incorrect"
        }));

    }

    continueGame = (clickedCard) => {
        //console.log("continue!", clickedCard);
        let cardArr = this.state.cards.cards;
        console.log(this.state);
        let newState = {}
        newState.cards = cardArr.map(value => {
            if (value.num === clickedCard) {
                return {num:clickedCard,click:true}
            } else {
                return value
            }
        });
        newState.stats = this.state.cards.stats + 1;
        if (newState.stats >= this.state.cards.maxStats) {
            newState.maxStats = newState.stats;
        } else {
            newState.maxStats = this.state.cards.maxStats;
        }
        console.log(newState);
        this.setState((state, props) => ({
            cards: newState,
            lastGuess: "Correct"
        }));
    }

    clickHandler = event => {
        event.preventDefault();
        // console.log(event.target.value);
        // console.log(event.target.getAttribute("data-id"));
        let clickStatus = event.target.value;
        //let clickedCard = event.target.getAttribute("data-id");
        
        if (clickStatus === "false") {
            this.continueGame(event.target.getAttribute("data-id"));
        } else if (clickStatus === "true") {
            this.lostGame();
        }
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        //console.log(cards);
        const { cards } = this.state.cards;
        let shuffleCards = this.shuffle(cards);
        let image = require("../../assets/images/chalkboard.jpg");

        return (
            <div style={{backgroundImage: "url("+image+")"}}>
                <Navbar actualScore={this.state.cards.stats} TopScore={this.state.cards.maxStats}  lastGuess={this.state.lastGuess}/>
                <Header />
                <Container> 
                    <Row >
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[0]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[1]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[2]} />
                        </Col>
                    </Row>
                    <Row >
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[3]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[4]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[5]} />
                        </Col>
                    </Row>
                    <Row >
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[6]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[7]} />
                        </Col>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-3">
                            <Card onClick={this.clickHandler} cardData={shuffleCards[8]} />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

const Col= props => {
    return (
        <div className={props.size}>
            {props.children}
        </div>
    );
}

const Row = props => {
    return (
        <div className="row">
            {props.children}
        </div>
    );
}

export default ClickyContainer;