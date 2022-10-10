import Greetings from "../components/Greetings";
import Contact_me from "../components/Contact_me";
import About_me from "../components/About_me";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import doubleDownArrow from "../assets/img/double-down-arrow.png";

import "../assets/css/homepage.css";
import { useEffect, useState, useRef } from "react";




export const Homepage = (props) => {
    // const [y,setY] = useState(0);
    const scrolldown = useRef();
    const [show,setShow] = useState(true);
    // useEffect(() => {
    //     setY(props.test.current.scrollY);
    //   }, []);
      
    const handleNavigation = (e)=>{
        // console.log("scrolling");
        // console.log(e.target.scrollTop );
        let scrollY = e.currentTarget.scrollY;
        if(scrollY != null && scrollY > 100){
            console.log("scroll down");
            setShow(false);
        }
        if(scrollY !=null && scrollY < 100){
            setShow(true);
        }

    }
    useEffect(() => {
        props.test.current.addEventListener("scroll", (e) => handleNavigation(e));
        window.addEventListener("scroll",(e)=>handleNavigation(e)) 
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            props.test.current.removeEventListener("scroll", (e) => handleNavigation(e));
            window.removeEventListener("scroll",(e)=>handleNavigation(e));
       };
    }, []);

    // useEffect(()=>{
    //     if(!show){
    //         scrolldown.current.
    //     }
    // },[show]);

    return (       
        <>
        <div>
            <Greetings/>
            <About_me/>
            <Skills/>
            <Projects/>
            <Contact_me/>
        </div>
        {show?
            <div className="scroll-indicator animatedDown" ref={scrolldown}>
                <p>scroll down</p>
                <img src={doubleDownArrow}/>
            </div>:null
        }
        </>

    );
}




