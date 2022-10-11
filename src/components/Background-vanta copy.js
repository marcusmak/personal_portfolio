import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// import * as THREE from 'three';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Background = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(()=>{
    const script = document.createElement("script");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js";
    script.async = true;

    document.body.appendChild(script);
    const script2 = document.createElement("script");

    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    script2.async = true;

    document.body.appendChild(script2);
  },[])
  return <div className='background' ref={myRef}>
    Foreground content goes here
  </div>
}

export default Background;