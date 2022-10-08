import React, { useState } from "react";
import parse from 'html-react-parser';
import '../assets/css/greetings.css';


class Greetings extends React.Component{
    constructor(props){
        super(props);
        this.roles = ["FullStack Software Engineer","Flutter Mobile Developer","Deep Learning Enthusiast"];
        this.state ={
            roleVal : 0
        };
        this.changeRoleVal = ()=>{
            this.setState((state)=>({
                roleVal : ++state.roleVal % this.roles.length
            }))
        }

    }

    componentDidMount() {
        this.timer = setInterval(
            this.changeRoleVal,
            5000,
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // spanise(content){
    //     let ans = "";
    //     Array.from(content).forEach(element => {
    //         ans += "<span className='char'>" + element + "</span>";
    //     });
    //     return ans;
    // }
    connectWifMe(){
        console.log("connecting");
    }

    render(){

        return (    
            <div className="Greetings">
                <div className="Personal_info">
                    <h1>
                        <p>Hi   <span id="waveHand">👋🏻</span></p>  
                        <p>I'm <span className="name">Marcus,</span> </p>
                        <p id="roleName">{this.roles[this.state.roleVal]}</p>
                    </h1>


                    <button className="button-85" role="button" onClick={this.connectWifMe}>Connect with me</button>

                </div>

            </div>   
        );
    }
}
export default Greetings;
