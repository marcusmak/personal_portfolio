import Greetings from "../components/Greetings";
import Contact_me from "../components/Contact_me";
import About_me from "../components/About_me";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import doubleDownArrow from "../assets/img/double-down-arrow.png";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/css/pages.css";
import { useEffect, useState, useRef } from "react";


// function Test() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Greetings />}>
//             {/* <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<routing />);



export const Pages = (props) => {
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
            onScrollDown();
            setShow(false);
        }
        if(scrollY !=null && scrollY < 100){
            setShow(true);
        }

    }

    const onScrollDown = ()=>{
        console.log("change content");
    }

    useEffect(() => {
        // ReactDOM.render(<Test/>,document.getElementById("homepage"));
        // props.test.current.addEventListener("scroll", (e) => handleNavigation(e));
        window.addEventListener("scroll",(e)=>handleNavigation(e)) 
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            props.test.current.removeEventListener("scroll", (e) => handleNavigation(e));
            window.removeEventListener("scroll",(e)=>handleNavigation(e));
       };
    }, []);


    return (       
        <>
        <div id="homepage">
                <Greetings/>
            <About_me/>
            <Projects/>
            <Skills/>
            <Contact_me/> 
        </div>
        {show?
            <div className="scroll-indicator animatedDown"ref={scrolldown}>
                <p>scroll down</p>
                <img src={doubleDownArrow}/>
            </div>:null
        }
        </>

    );
}

export default Pages;




