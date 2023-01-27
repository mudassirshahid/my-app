import React from 'react';
import Weekends from './Weekends';
import WorkDays from './Workdays';
import ri from '../assets/images/ri.PNG';

function CurrentMessage() {

    const day = new Date().getDay();

    const randomImageUrl = "https://source.unsplash.com/random/300x300?sig=1"

    return ( 
        <>
        {day >= 1 && day <=5 ? <WorkDays /> : <Weekends /> }
        <h1 className='mt-5 text-primary text-center'>Import Images</h1>
        <img height={300} width={500} src={ri} alt="screenshot" />
        {/* 2ND WAY */}
        <img height={300} width={500} src={require('../assets/images/ri.PNG')} alt="screenshot" />
        {/* 3RD WAY */}
        <img  src={randomImageUrl} alt="screenshot" />
        </>
     );
}

export default CurrentMessage;