import { List, ListItem, Typography, styled } from '@mui/material'
import React from 'react';
import {Star} from '@mui/icons-material'

const Banner = styled('img')({
    width: 47
})
const Container = styled(List)({
    display: 'flex'
})

export const MoviesList = ({movie}) => {
  return (
    <>
        {
            movie.map((ele)=>(
                <Container>
                    <ListItem>
                        <Banner src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`} alt='poster'/>
                    </ListItem>
                    <ListItem>
                        <Typography>{ele.original_title}</Typography>
                    </ListItem>
                    <ListItem>
                        <Star color='warning'/>
                        <Typography>{ele.vote_average}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>{ele.release_date}</Typography>
                    </ListItem>
                </Container>
            ))
        }
    </>
  )
}
