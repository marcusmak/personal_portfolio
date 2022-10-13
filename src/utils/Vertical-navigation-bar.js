import React from "react";
import "../assets/css/navbar.css"
class VerticalNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <ul>
                    {
                        this.props.routes.map((route) => {
                            console.log(this.props.currentPageNo.current);
                            return <li
                                key={route.path}
                                className={
                                    this.props.routes[this.props.currentPageNo.current] == route ? "active" : ""
                                }>{route.name}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}
export default VerticalNav;
