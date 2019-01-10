import React from 'react';


const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href ="/" className="navbar-brand">Clicky</a>
            <div style={{textAlign:"center"}}>score: {props.actualScore} | Top Score: {props.TopScore}</div>
            <div style={{ paddingLeft: "50px" }}>Last Guess: {props.lastGuess}</div>
        </nav>
    );
}

export default Navbar;