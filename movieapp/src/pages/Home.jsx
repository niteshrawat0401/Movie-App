import React, { useEffect, useState } from 'react'
import { Header } from '../components/common/Header';
import { getCategoriesMovie } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constants';
import { Banner } from '../components/Banner';
import { Box, styled } from '@mui/material';
import { Upnext } from '../components/Upnext';
import { Slide } from '../components/Slide';

const Wrapper = styled(Box)`
display : flex;
padding : 20px
`
const Component = styled(Box)`
padding : 0 115px
`

export const Home = () => {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        const getMovie = async() =>{
            const response = await getCategoriesMovie(NOWPLAYING_API_URL);
            setMovie(response.results)
        }
        getMovie()
    }, []);

  return (
    <>
    <Header/>
    <Component>
    <Wrapper>
        <Banner movie={movie}/>
        <Upnext movie={movie}/>
    </Wrapper>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    <Slide movie={movie}/>
    </Component>
    </>
  )
}
