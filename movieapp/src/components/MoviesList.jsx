import { List, ListItem, Typography, styled } from '@mui/material'
import React from 'react';

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
                </Container>
            ))
        }
    </>
  )
}
