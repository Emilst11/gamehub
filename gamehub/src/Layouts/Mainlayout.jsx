import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const Mainlayout = (props) => {
    return(
        <Box bgcolor={'background.paper'}>
            <Navbar/>
            {props.children}
        </Box>
    )
}

export default Mainlayout