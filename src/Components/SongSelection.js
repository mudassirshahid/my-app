import React from 'react';


function SongSelection() {

    const bird1 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
      ); 
     
      const bird2 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
      ); 
     
      function toggle1() { 
        if (bird1.paused) { 
          bird1.play(); 
        } else { 
          bird1.pause(); 
        } 
      }; 
     
      function toggle2() { 
        if (bird2.paused) { 
          bird2.play(); 
        } else { 
          bird2.pause(); 
        } 
      }; 
    return ( 
    <>
     <h1 className='text-danger mt-5 text-center'>Song Selection</h1> 
        <div className='d-flex justify-content-center mt-5'>
            <button className='btn btn-secondary' onClick={toggle1}>Caspian Tern 1</button> 
            <button className='btn btn-secondary' onClick={toggle2}>Caspian Tern 2</button> 
        </div> 
    </>
     );
}

export default SongSelection;