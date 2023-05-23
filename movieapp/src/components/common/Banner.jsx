import { Box, styled } from '@mui/material'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  const StyledBanner = styled('img')({
    width: '100%'
})

export const Banner = ({movie}) => {
  return (
    <Box style={{ width: '65%' }}>
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
                    <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} />
                ))
            }
        </Carousel>
    </Box>
  )
}
