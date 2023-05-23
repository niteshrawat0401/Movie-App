import React, { useEffect, useState } from 'react'
import { Header } from '../components/common/Header';
import { getCategoriesMovie } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constants';
import { Banner } from '../components/common/Banner';
import { Box } from '@mui/material';

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
    <Box>
        <Banner movie={movie}/>
    </Box>
    </>
  )
}
