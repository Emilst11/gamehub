import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Grid, Pagination, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/Actions/data";
import Mainlayout from "../Layouts/Mainlayout";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home = () => {
    const dispatch = useDispatch()
    const { list, isLoading } = useSelector(state => state.data)
    const { lists } = useSelector(state => state.likes)
    const [page, setPage] = useState(1)
    const [post] = useState(12)

    useEffect(() => {
        dispatch(getData())
    }, [])

    const lastIndex = page * post
    const firstIndex = lastIndex - post
    const pagination = list?.slice(firstIndex, lastIndex)
    const postpages = Math.ceil(list?.length / post)

    const pagesIndicators = (event, value) =>{
        setPage(value)
    }

    const likeChecks = (id) => {
        const like = lists.find(item => item.id === id)
        return(
            like?.id && <FavoriteIcon/>
        )
    }

    return(
        <Mainlayout>
            <Container>
                <Typography component='h3'>
                    Games you likes
                </Typography>
                <Stack direction='row'
                alignItems='center'
                spacing={2}
                sx={{my: 2}}>
                    {
                        lists && lists.map((item, index) => <Chip label={item.name} variant='outlined' key={index}/>)
                    }
                </Stack>
                <Grid container spacing={3} sx={{ py: 1}}>
                    {
                        list && (
                            pagination.map((item, index) => 
                            <Grid item xs={12} md={4} key={index}>
                                <Card>
                                        {
                                            isLoading ? (
                                                <Stack spacing={1}>
                                                    <Skeleton width="100%">
                                                        <Typography variant="h3">.</Typography>
                                                    </Skeleton>
                                                    <Skeleton width="100%">
                                                        <Typography>.</Typography>
                                                    </Skeleton>
                                                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                                                    <Skeleton width="100%">
                                                        <Typography variant="body">.</Typography>
                                                    </Skeleton>
                                                    <Skeleton width="100%">
                                                        <Typography>.</Typography>
                                                    </Skeleton>
                                                    <Skeleton width="100%">
                                                        <Typography>.</Typography>
                                                    </Skeleton>
                                                </Stack>
                                            ):(
                                                <CardActionArea component={Link} to={`/detail/${item.title}`} >
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between' p={1}>
                                                        <CardHeader
                                                            title={item.title}
                                                            subheader={item.release_date}
                                                            sx={{minHeight: '80px'}}
                                                        />
                                                        {
                                                            likeChecks(item.id)
                                                        }
                                                    </Stack>
                                                    <CardMedia
                                                        component='img'
                                                        width='100'
                                                        image={item.thumbnail}
                                                        alt={item.title}
                                                    />
                                                    <CardContent>
                                                        <Stack spacing={1} sx={{minHeight: '250px'}}>
                                                            <Typography variant="body1" color="text.primary" sx={{minHeight: '80px'}}>
                                                                {item.short_description}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Publisher : {item.publisher}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Developer : {item.developer}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Genre : {item.genre}
                                                            </Typography>
                                                        </Stack>
                                                    </CardContent>
                                                </CardActionArea>
                                            )
                                        }
                                </Card>
                            </Grid>
                            )
                        )
                    }
                </Grid>
                <Stack>
                    <Pagination count={postpages} page={page} onChange={pagesIndicators} shape='rounded' size="large" sx={{mx: 'auto'}}/>
                </Stack>
            </Container>
        </Mainlayout>
    )
}

export default Home