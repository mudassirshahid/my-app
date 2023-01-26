import React from 'react';
import { useState } from 'react';


export default function RegisterForm() { 
    const [form, setForm] = useState({ 
      firstName: 'mudassir', 
      lastName: 'shahid', 
      email: 'mudassirshahid84@gmail.com', 
    }); 
  
    return ( 
      <> 
      <div className='mt-5' >
        <label> 
          First name: 
          <input 
            value={form.firstName} 
            onChange={e => { 
              setForm({ 
                ...form, 
                firstName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <br/>
        <br/>
        <label> 
          Last name: 
          <input 
            value={form.lastName} 
            onChange={e => { 
              setForm({ 
                ...form, 
                lastName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <br/>
        <br/>
        <label> 
          Email: 
          <input 
            value={form.email} 
            onChange={e => { 
              setForm({ 
                ...form, 
                email: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <br/>
        <br/>
        <p> 
          {form.firstName}{' '} 
          {form.lastName}{' '} 
          ({form.email})
        </p>
        </div> 
      </> 
    ); 
  } 