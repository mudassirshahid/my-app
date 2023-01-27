import React from 'react';
import ReactPlayer from "react-player";

const MyVideo = () => {

    const vidUrl = "https://www.youtube.com/watch?v=GB2wGn3ITZY"
    return (
        <>
        
        <h1 className='text-danger mt-5 text-center' >React Player Example</h1>
        <div className='d-flex justify-content-center mt-5'>
         <ReactPlayer url='https://www.youtube.com/watch?v=GB2wGn3ITZY' />
         {/* 2ND WAY */}
         <ReactPlayer url={vidUrl} playing={true} volume={0.1} />
      </div>
      </>
    );
  };


export default MyVideo;


// <!-- EXPLORE MORE ABOUT REACT PLAYER BY GOING THIS LINK  -->

// https://github.com/CookPete/react-player