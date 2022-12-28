import React, { useEffect, useState } from 'react'

function Content() {
    const [state, setState] = useState(false);

    
useEffect(()=>{
  alert('Counter is clicked!!!')
},[state])
  return (
    <div>
      {state && <h4>Hi, I am the message who was supposed to appear after the counter is clicked, if I am here after the click. Everything is good.</h4>}
        <button onClick={()=>setState(!state)}>Counter</button>
    </div>
  )
}

export default Content