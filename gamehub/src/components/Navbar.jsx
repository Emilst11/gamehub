import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import { changetheme } from "../store/Actions/mode";
import Search from "./Search";

const Navbar = () => {
    const dispatch = useDispatch()
    const { dark } = useSelector(state => state.mode)

    const changeMode = () => {
        dispatch(changetheme(!dark))
    }
    return(
        <Box>
            <AppBar position="static" sx={{boxShadow: 'none', py: 2}}>
                <Toolbar variant="regular">
                    <Typography variant="h6" component='div' sx={{ mr: '1rem' }}>
                        Gamehub
                    </Typography>
                    <Search/>
                    <IconButton onClick={changeMode}>
                        <ModeNightOutlinedIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar