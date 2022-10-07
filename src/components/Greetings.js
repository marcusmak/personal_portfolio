import React from "react";
import '../assets/css/greetings.css';

class Greetings extends React.Component{
    
    render(){
        return (    
            <div className="Greetings">

                <div className="Personal_info">
                    <p>Hi!👋🏻</p>  
                    <p>I'm Marcus </p>
                    <p>A Software Engineer</p>
                </div>
            </div>   
        );
    }
}
export default Greetings;
