import React from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
    const { list } = useSelector(state => state.data)
    return(
        <Box sx={{ display:'flex', alignItems: 'Center', gap:'1rem', flexGrow: '1' }}>
            <SearchIcon/>
            <Autocomplete
                options={list}
                sx={{ width: 300 }}
                autoHighlight
                getOptionLabel={(option) => option.title}
                renderOption={(props, option) => 
                    <Box component={ Link } sx={{ '& > img': { mr: 2, flexShrink: 0 }, textDecoration: 'none'}} {...props} to={`/detail/${option.title}`}>
                        <img
                            loading="lazy"
                            width="20"
                            src={option.thumbnail}
                            srcSet={option.thumbnail}
                            alt={option.title}
                        />
                        <Typography variant="body1" color='text.primary'>
                            {option.title}
                        </Typography>
                    </Box>
                }
                renderInput={(params) => 
                <TextField {...params} 
                label="Search here"
                />}
            />
        </Box>
    )
}

export default Search