import { Grid2, Box, Typography, Button, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TestimonialsCard from "../../components/home/TestimonialsCard";
//TODO: apagar esse dados depois
const testimonials = [
    {
        name: 'Rajesh Patel',
        testimonial: 'Klothink exceeded my expectations. The gowns quality and design made me feel like a queen. Fast shipping, too!',
        stars: 5
        
    },
    {
        name: 'Emily Walker',
        testimonial: 'Klothink exceeded my expectations. The gowns quality and design made me feel like a queen. Fast shipping, too!',
        stars: 4
    },
    {
        name: 'Sarah Thompson',
        testimonial: 'Klothink exceeded my expectations. The gowns quality and design made me feel like a queen. Fast shipping, too!',
        stars: 3
    },
    {
        name: 'Gabriel Victor',
        testimonial: 'Klothink exceeded my expectations. The gowns quality and design made me feel like a queen. Fast shipping, too!',
        stars: 2

    },
]

export default function Testimonials() {

    const carouselRef = useRef(null)
    const firstCardRef = useRef(null)

    function handleCarouselScroll(direction) {
        console.log(firstCardRef)
        const width = firstCardRef.current.offsetWidth
        carouselRef.current.scrollLeft += direction === 'left' ? -width - 30: width + 30
    }

    return (
        <Grid2
            mb={{ md: '150px', xs: '75px' }}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap='5px'
                mb={{xl: '80px', md: '60px', xs: '40px'}}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' }
                    }}
                >
                    <Typography variant='h1'>
                        CUSTOMERS LOVE.
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        TESTIMONIALS
                    </Typography>
                </Box>
                <Button variant="contained" color='primary' sx={{ alignSelf: 'end', '@media(max-width: 900px)': { order: 3, mt: '10px', alignSelf: 'start' } }} >
                    View All Testimonials
                </Button>
                <Typography variant='h6' color='grey.40' sx={{}}>
                    At Klothink, our customers are the heartbeat of our brand.
                    Explore the heartfelt testimonials shared by those who have <br />
                    experienced the magic of Klothink fashion.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    width: '100%',
                    borderRadius: '20px',
                    bgcolor: 'white.97',
                    position: 'relative',
                    pb: { xs: '20px', md: '0px'},
                }}
            >
                <Grid2
                    ref={carouselRef}
                    sx={{
                        width: '100%',
                        p: { xs: '20px', md: '24px', xl: '30px' },
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridAutoColumns: {xl: 'calc(100%/3 - 20px)', md:'calc(100%/2 - 20px)', xs: 'calc(100% - 20px)' },
                        gap: { xs: '20px', md: '24px', xl: '30px' },
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 0,

                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                    }}
                >
                    {testimonials.map((item, i) => <TestimonialsCard 
                                                        firstCardRef={firstCardRef}
                                                        key={i} 
                                                        name={item.name} 
                                                        testimonial={item.testimonial} 
                                                        stars={item.stars}
                                        />)}
                </Grid2>
                <IconButton
                    onClick={() => handleCarouselScroll('left')}
                    sx={{
                        width: '46px',
                        height: '46px',
                        bgcolor: 'absolute.white',
                        mr: '7px',
                        border: '1px solid #B3B3B3',
                        position: {md: 'absolute', xs: 'relative'},
                        left: {md: '-5px', xs: '50%'},
                        top: {md: '50%', xs: 0},
                        transform: {md: 'translate(-50%,-50%)', xs: 'translate(-100%,0%)'}
                        
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ color: 'grey.40' }} />
                </IconButton>
                <IconButton
                    onClick={() => handleCarouselScroll('right')}
                    sx={{
                        width: '46px',
                        height: '46px',
                        bgcolor: 'grey.15',
                        position: {md: 'absolute', xs: 'relative'},
                        right: {md: '-5px', xs: '-50%'},
                        top: {md: '50%', xs: 0},
                        transform: {md: 'translate(50%,-50%)', xs: 'translate(-100%,0%)'}
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