import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, ImageList, ImageListItem, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { back, getDetail } from "../store/Actions/data";

const Detail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { list } = useSelector(state => state.data)
    const { details } = useSelector(state => state.detail)

    const find = list.find(item => item.title === params.title)

    useEffect(() => {
        dispatch(getDetail(find?.id))
        if(!find?.id){
            navigate('/')
        }
    }, [params.title])


    const getBack = () => {
        dispatch(back())
    }
    return(
        <Mainlayout>
            <Paper sx={{minHeight: '100vh', py: 3, borderRadius: 0}}>
                <Container maxWidth='md'>
                    <Button variant="Primary" component={Link} to='/' size="large" onClick={getBack} sx={{mb: 3}}>Get Back</Button>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <Avatar alt={details.title} src={details.thumbnail} sx={{ width: 56, height: 56 }}/>
                        <Box>
                            <Typography variant="h2">{details.title}</Typography>
                            <Typography variant="body1" color='text.secondary'>{details.developer}</Typography>
                        </Box>
                    </Stack>
                    <ImageList cols={3} rowHeight={250}>
                        {
                            details?.screenshots?.map((item) =>
                                <ImageListItem key={item.id}>
                                    <img src={item.image} alt={item.id}/>
                                </ImageListItem>
                            )
                        }
                    </ImageList>
                    <Stack spacing={2}>
                        <Typography variant="h6" color='text.primary'>Description</Typography>
                        <Typography paragraph color='text.secondary'>{details.description}</Typography>
                        <Typography variant="h6" color='text.primary'>Genre</Typography>
                        <Typography paragraph color='text.secondary'>{details.genre}</Typography>
                        <Typography variant="h6" color='text.primary'>Release date</Typography>
                        <Typography paragraph color='text.secondary'>{details.release_date}</Typography>
                        <Typography variant="h6" color='text.primary'>Minimum System Required</Typography>
                        <Stack spacing={1}>
                            <Typography paragraph color='text.secondary'>{details.minimum_system_requirements?.os}</Typography>
                            <Typography paragraph color='text.secondary'>{details.minimum_system_requirements?.processor}</Typography>
                            <Typography paragraph color='text.secondary'>{details.minimum_system_requirements?.memory}</Typography>
                            <Typography paragraph color='text.secondary'>{details.minimum_system_requirements?.graphics}</Typography>
                            <Typography paragraph color='text.secondary'>{details.minimum_system_requirements?.storage}</Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Paper>
        </Mainlayout>
    )
}

export default Detail