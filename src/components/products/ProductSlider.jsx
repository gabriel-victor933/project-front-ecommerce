import { Grid2, Typography, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import img from '/jaqueta_black.png'
import ProductCard from "./ProductCard";

// eslint-disable-next-line react/prop-types
export default function ProductSlider({title, subtitle}){

    const carouselRef = useRef(null)
    const firstCardRef = useRef(null)

    function handleCarouselScroll(direction){
        const scroll = direction === 'left' ? -firstCardRef.current.offsetWidth : firstCardRef.current.offsetWidth
        carouselRef.current.scrollLeft += scroll
    }

    return (
        <Grid2
            mb={{xs: '60px', xl: '80px'}}
        >
            <Grid2>
                <Typography variant='h3'>
                    {title}
                </Typography>
                <Typography variant='h6' color='grey.40'>
                    {subtitle}
                </Typography>
            </Grid2>
            <Grid2
                className='wrapper'
                sx={{
                    width: '100%',
                    px: '1px',
                    my: {xl: '50px', md: '40px', xs: '30px'}
                }}
            >
                <Grid2
                    className='carousel'
                    ref={carouselRef}
                    sx={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridAutoColumns: 'calc((100% / 4) - 21px)',
                        gap: '30px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 0,

                        '@media(max-width: 1440px)': {
                            gridAutoColumns: 'calc((100% / 3) - 21px)',
                        },

                        '@media(max-width: 900px)': {
                            gridAutoColumns: 'calc((100% / 2) - 21px)',
                        },

                        '@media(max-width: 600px)': {
                            gridAutoColumns: 'calc((100% / 1) - 21px)',
                        },

                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },

                        '& .dragging': {
                            scrollSnapType: 'none',
                            scrollBehavior: 'auto',
                        },
                        
                        '& .no-transition': {
                            scrollBehavior: 'auto',
                        },
                        
                        '& .dragging .card': {
                            cursor: 'grab',
                            userSelect: 'none',
                        },
                    }}
                >
                    {[1,2,3,4,5,6,7,8,9,10].map((item,i) => (<ProductCard key={i} img={img} cardRef={firstCardRef}/>))}
                </Grid2>
            </Grid2>
            <Grid2
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <IconButton
                    onClick={()=> handleCarouselScroll('left')}
                    sx={{
                        width: '46px',
                        height: '46px',
                        bgcolor: 'absolute.white',
                        mr: '7px',
                        border: '1px solid #B3B3B3'
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ color: 'grey.40' }} />
                </IconButton>
                <IconButton
                    onClick={()=> handleCarouselScroll('right')}
                    sx={{
                        width: '46px',
                        height: '46px',
                        bgcolor: 'grey.15'
                    }}
                >
                    <ArrowBackIosNewIcon
                        sx={{
                            transform: 'rotate(180deg)',
                            color: 'absolute.white'
                        }}
                    />
                </IconButton>
            </Grid2>
        </Grid2>
    )
}