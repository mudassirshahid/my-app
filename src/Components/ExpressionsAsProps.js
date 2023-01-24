import React from 'react';

const bool = ''; 
console.log('bool')
export default function ExpressionsAsProps(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default function App() { 
    return ( 
        <div className="App"> 
            <ExpressionsAsProps toggleBoolean={!bool} /> 
        </div> 
    ); 
};




