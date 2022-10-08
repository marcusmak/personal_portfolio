import Greetings from "../components/Greetings";
import doubleDownArrow from "../assets/img/double-down-arrow.png";
import "../assets/css/homepage.css";
import { useEffect, useState, useCallback, useRef } from "react";




export const Homepage = (props) => {
    // const [y,setY] = useState(0);
    const scrolldown = useRef();
    const [show,setShow] = useState(true);
    // useEffect(() => {
    //     setY(props.test.current.scrollY);
    //   }, []);
      
    const handleNavigation = (e)=>{
        // console.log("scrolling");
        console.log(e.target.scrollTop);
        if(e.target.scrollTop && e.target.scrollTop > 100){
            console.log("scroll down");
            setShow(false);
        }
        if(e.target.scrollTop && e.target.scrollTop < 100){
            setShow(true);
        }

    }
    useEffect(() => {
        props.test.current.addEventListener("scroll", (e) => handleNavigation(e));
        
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            props.test.current.removeEventListener("scroll", (e) => handleNavigation(e));
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
            <Greetings/>
            {/* <Projects/> */}
            {/* <Contact_me/> */}
            {/* <Greetings/> */}
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




