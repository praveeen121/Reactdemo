import React, { Component, useState } from 'react'



export default function Func() {
    const [count, setCount] = useState(1);
    const [button, setbutton] = useState('Subscribe')
    function subchange() {
        if(count=== 0 ){
            setbutton('Subscribe')
            setCount(1)
        }
        else{
            setbutton('unsubscribe')
            setCount(0)
    
    }
    
    }
    return (
        <div>
            <h2>button</h2>
            <button onClick= {subchange} >{button}</button>
            </div>
    )
}
// onClick={()=> setCount(1)}