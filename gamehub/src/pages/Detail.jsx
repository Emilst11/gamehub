import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, ImageList, ImageListItem, Paper, Stack, Typography, Skeleton, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { back, dislike, getDetail, like } from "../store/Actions/data";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Detail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [likes, setLikes] = useState(false)
    const { list } = useSelector(state => state.data)
    const { details, isLoading } = useSelector(state => state.detail)
    const { lists } = useSelector(state => state.likes)

    const find = list.find(item => item.title === params.title)
    const likesFind = lists?.find(item => item.id === find.id)
    
    useEffect(() => {
        dispatch(getDetail(find?.id))
        if(!find?.id){
            navigate('/')
        }
        likesFind?.id ? setLikes(true) : setLikes(false)
    }, [params.title])

    const getBack = () => {
        dispatch(back())
    }
    const addLike = (id, name) => {
        setLikes(true)
        const data = {
            id: id,
            name: name
        }
        dispatch(like(data))
    }
    const disLike = (id) => {
        setLikes(false)
        dispatch(dislike(id))
    }
    return(
        <Mainlayout>
            <Paper sx={{minHeight: '100vh', py: 3, borderRadius: 0}}>
                <Container maxWidth='md'>
                    <Stack direction='row' 
                    justifyContent="space-between"
                    alignItems="center">
                        <Button variant="Primary" component={Link} to='/' size="large" onClick={getBack} sx={{mb: 3}}>Get Back</Button>
                        <IconButton onClick={likes ? () => disLike(details.id) : () => addLike(details.id, details.title)}>
                            {likes ? (<FavoriteIcon/>) : (<FavoriteBorderIcon/>) }
                        </IconButton>
                    </Stack>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        {
                            isLoading ? (
                                <Skeleton variant="circular">
                                    <Avatar/>
                                </Skeleton>
                            ): <Avatar alt={details.title} src={details.thumbnail} sx={{ width: 56, height: 56 }}/>
                        }
                        <Box>
                            <Typography variant="h5">{details.title}</Typography>
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