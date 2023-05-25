import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box, Typography, styled} from '@mui/material'

const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const StyledBanner = styled('img')({
    width: '100%',
    marginTop: '20px'
})

const Title = styled(Typography)`
color: #FFFFFF
`

export const Slide = ({movie}) => {
    // console.log(movie);
  return (
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
                    <Box key={ele.id}>
                    <StyledBanner  src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} />
                    <Title>{ele.original_title}</Title>
                    </Box>
                ))
            }
        </Carousel>
  )
}
