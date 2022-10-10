import "../assets/css/contact_me.css";
import linkedin_logo from "../assets/img/linkedin.png";
import github_logo from "../assets/img/github.png";

const Contact_me = ()=>{
    const logo_onclick = (logo) =>{
        console.log(logo);
        if(logo == "linkedin"){
            window.open("https://www.linkedin.com/in/marcus-m-092710202", '_blank');
        }else if (logo == "github"){
            window.open("http://www.github.com/marcusmak","_blank");

        }

    };

    const Submit = ()=>{
        console.log("Submit");
        var yourMessage = document.getElementById("message").value;
        var subject = document.getElementById("subject").value;
        if(yourMessage != ""){
            let url = "mailto:mmarkusm@protonmail.com?subject="
                + encodeURIComponent(subject)
                + "&body=" + encodeURIComponent(yourMessage);
            document.location.href = url;
            console.log(url);
        }else{
            document.getElementById("hint").style.display = "block";
        }
    }

    return (
        <>
        <div className="contact_me container">
            <div className="text_content">
                <div className="contact_me" id="contact_me">
                    <h3>
                        <p>
                            Contact me
                        </p>  


                    </h3>   

                    <p className="message">
                        Need any help with your project? Want to kick start a project but don't know how? Feel free to discuss with me any technical questions or freelance opportunities.
                    </p>

                    <div>
                        <p>
                            <input placeholder="Subject" id="subject">
                            </input>
                        </p>
                        <textarea placeholder="Type yopur message here..." id="message">
                            
                        </textarea>      
                        <p className="hint" id="hint">* Enter your message</p>

                        <div className="flex-row">
                            <div className="flex-item">
                                <img src={linkedin_logo} alt="linkedin logo; Credit to IconsBox - Flaticon" onClick={()=>logo_onclick("linkedin")} className="social-media-logo" />
                                <img src={github_logo} alt="github logo; Credit to IconsBox - Flaticon" onClick={()=>logo_onclick("github")}  className="social-media-logo"/>
                            </div>                   
                            <div className="flex-item">
                                <button onClick={Submit}>Submit</button>
                            </div>
                        </div>

                             
                    </div>   
                </div>
            </div>
        </div>
        </>
    );
}

// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by IconsBox - Flaticon</a>
/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by IconsBox - Flaticon</a> */

export default Contact_me;