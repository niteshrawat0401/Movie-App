import React, { useState ,useEffect } from 'react'
import { Header } from '../components/common/Header'
import {Box, styled} from '@mui/material'
import {useLocation} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from '../constants/constants';
import { getCategoriesMovie } from '../services/api';

const Banner = styled('img')({
  height: 450,
  width: '100%'
})

// const Title = styled(Typography)`
// color: #FFFFFF
// `

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CategoryMovies = () => {
  const [movie, setMovie] = useState([]);

  const {search} = useLocation();

  useEffect(()=>{
    const getData = async (API_URL) =>{
      let response = await getCategoriesMovie(API_URL);
      setMovie(response.results);
    }

    let API_URL;

    if(search.includes('popular'))
      API_URL = POPULAR_API_URL;
      else if(search.includes('toprated'))
        API_URL = TOPRATED_API_URL;
      else if(search.includes('upcoming'))
        API_URL = UPCOMING_API_URL;
      

      getData(API_URL)
  }, [search])
  return (
    <>
    <Header/>
    <Box>
    <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        >
            {
                movie.map((ele)=>(
                    <Banner key={ele.id} src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} />
                ))
            }
        </Carousel>
    </Box>
    </>
  )
}
