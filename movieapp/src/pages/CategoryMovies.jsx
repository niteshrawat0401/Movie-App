import React, { useState ,useEffect } from 'react'
import { Header } from '../components/common/Header'
import {Box, Typography, styled, Divider} from '@mui/material'
import {useLocation} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, moviesType } from '../constants/constants';
import { getCategoriesMovie } from '../services/api';
import { MoviesList } from '../components/MoviesList';

const Component = styled(Box)`
    width: 83%;
    margin: auto;
`;
const Banner = styled('img')({
  height: 450,
  width: '100%'
})

const Container = styled(Box)`
    background: #F5F5F5;
    text-align: left;
    padding: 10px;
`

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
    <Component>
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
        <Container>
          <Typography variant='h6'>IMDB Charts</Typography>
          <Typography variant='h4'>IMDB {moviesType[search.split('=')[1]]}</Typography>
          <Typography style={{ fontSize: 12, margin: 5}}>IMDB Top {movie.length} as rated by regular IMDB voters.</Typography>
          <Divider/>
          <MoviesList movie={movie}/>
        </Container>
    </Component>
    </>
  )
}
