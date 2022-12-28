import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const Mainlayout = (props) => {
    return(
        <Paper>
            <Navbar/>
            <Grid container>
                <Grid item xs={0} md={2} sx={{p: 3}}>
                    <Typography>
                        Left
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7} sx={{py: 3}}>
                    {props.children}
                </Grid>
                <Grid item md={3}>
                    <Typography sx={{p: 3}}>
                        Right
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Mainlayout