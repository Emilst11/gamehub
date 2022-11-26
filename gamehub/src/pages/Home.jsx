import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/Actions/data";
import Mainlayout from "../Layouts/Mainlayout";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const { list, isLoading } = useSelector(state => state.data)
    const [page, setPage] = useState(1)
    const [post] = useState(12)

    useEffect(() => {
        dispatch(getData())
    }, [])

    const lastIndex = page * post
    const firstIndex = lastIndex - post
    const pagination = list?.slice(firstIndex, lastIndex)
    const postpages = Math.ceil(list?.length / post)

    const pagesIndicators = (e, value) =>{
        setPage(value)
    }


    return(
        <Mainlayout>
            <Paper sx={{minHeight: '100vh', py: 3, borderRadius: 0}}>
                <Container maxWidth='l'>
                    <Grid container spacing={3} sx={{ py: 3}}>
                        {
                            list ? (
                                pagination.map((item, index) => 
                                <Grid item xs={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea component={Link} to={`/detail/${item.title}`} >
                                            <CardHeader
                                                title={item.title}
                                                subheader={item.release_date}
                                            />
                                            <CardMedia
                                                component='img'
                                                width='100'
                                                image={item.thumbnail}
                                                alt={item.title}
                                            />
                                            <CardContent sx={{minHeight: '180px'}}>
                                                <Typography variant="body1" color="text.primary" sx={{my : '1rem'}}>
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
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                )
                            ) : (
                                <div>Failed</div>
                            )
                        }
                    </Grid>
                    <Stack>
                        <Pagination count={postpages} page={page} onChange={pagesIndicators} shape='rounded' size="large" sx={{mx: 'auto'}}/>
                    </Stack>
                </Container>
            </Paper>
        </Mainlayout>
    )
}

export default Home