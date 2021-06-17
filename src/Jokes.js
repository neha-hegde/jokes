import React from "react";

const Jokes =(props) => {
    const {question,punchLine} = props;
    return(
        <div className="joke">
            <p style={{display:!question && "none"}}>Question: <span>{question}</span></p>
            <p style={{color:!question && "purple"}}>Answer: <span>{punchLine}</span></p>
        </div>
    );
}

export default Jokes;