import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Mainlayout from "../Layouts/Mainlayout";
import { back } from "../store/Actions/data";

const NotFound = () =>{
    const dispatch = useDispatch()
    const getBack = () => {
        dispatch(back())
    }
    return(
        <Mainlayout>
            <Paper sx={{minHeight: '90vh', py: 3, borderRadius: 0}}>
                <Container maxWidth='md'>
                    <Button variant="Primary" component={Link} to='/' size="large" onClick={getBack} sx={{mb: 3}}>Get Back</Button>
                    <Typography variant="h1">
                        Error Not Found
                    </Typography>
                </Container>
            </Paper>
        </Mainlayout>
    )
}

export default NotFound