import React from "react";
import Navbar from "../components/Navbar";

const Mainlayout = (props) => {
    return(
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default Mainlayout