import React from "react";
//import background from "../../assets/images/chalkboard.jpg";

 const Main = props => {
    return (
        <div className="container" style={{height:"75vh",overflow:"auto"}}>
            {props.children}
        </div>
    );
    
}

export default Main;