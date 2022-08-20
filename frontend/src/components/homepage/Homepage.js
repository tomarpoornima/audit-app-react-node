import React from "react";
import "./homepage.css";

const Homepage = ( {setLoginUser}) => {
    return (
        <div className="homepage">
         <h1>Hello homepage</h1>
         <div class="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage;