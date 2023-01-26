import React from 'react';


// export default function UseStateHook() { 
//     const [inputText, setText] = useState('hello'); 
  
//     function handleChange(e) { 
//       setText(e.target.value); 
//     } 
  
//     return ( 
//       <> 
//         <input className='mt-5' value={inputText} onChange={handleChange} /> 
//         <p>You typed: {inputText}</p> 
//         <button onClick={() => setText('hello')}> 
//           Reset 
//         </button> 
//       </> 
//     ); 
//   } 

  export default function UseStateHook(props) { 
    return ( 
      <>
       <h1 className='mt-5' >{props.message}</h1>
      </> 
    ); 
  } 



