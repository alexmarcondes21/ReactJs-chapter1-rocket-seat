import React from 'react'
import { useState } from 'react';

export default function Counter (){
          
    const [counter , setCounter] = useState(0);

    function increment(){
        setCounter( counter + 1 )    
    }
    
    return(
        <>
            <h2>{counter}</h2>
            <button type="submit" onClick={increment}>Increment</button>
        </>
    )
}