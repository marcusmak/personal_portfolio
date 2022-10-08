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
                        <textarea>
                            
                        </textarea>      

                        <div className="flex-row">
                            <div className="flex-item">
                                <img src={linkedin_logo} alt="linkedin logo; Credit to IconsBox - Flaticon" onClick={()=>logo_onclick("linkedin")} className="social-media-logo" />
                                <img src={github_logo} alt="github logo; Credit to IconsBox - Flaticon" onClick={()=>logo_onclick("github")}  className="social-media-logo"/>
                            </div>                   
                            <div className="flex-item">
                                <button>submit</button>
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