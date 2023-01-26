import React from 'react';

// function EventHandling() {

//     const clickHandler = () => console.log('clicked');

//     return ( 
//         <button className='btn btn-primary mt-5' onClick={clickHandler}>
//         Click me
//         </button>
//      );
// }

function EventHandling() {

    const clickHandler = () => console.log('clicked');

    return ( 
        <button className='btn btn-primary mt-5' onMouseOver={clickHandler}>
        Click me
        </button>
     );
}

export default EventHandling;