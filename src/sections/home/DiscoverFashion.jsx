import { Button, Grid2, Box, Typography, IconButton } from "@mui/material";
import { useState, useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import img from '/jaqueta_black.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function DiscoverFashion() {
    const [type, setType] = useState('Casual')
    const [category, setCategory] = useState('ALL')

    const carouselRef = useRef(null)
    const firstCardRef = useRef(null)
    const scrollerRef = useRef(null)

    function handleCarouselScroll(direction){

        const scroll = direction === 'left' ? -firstCardRef.current.offsetWidth : firstCardRef.current.offsetWidth
        carouselRef.current.scrollLeft += scroll
    
        const max = Math.floor(carouselRef.current.scrollWidth/(firstCardRef.current.offsetWidth + 30)) - Math.floor(carouselRef.current.offsetWidth/firstCardRef.current.offsetWidth)
        const current = Math.floor(carouselRef.current.scrollLeft/(firstCardRef.current.offsetWidth + 30))
        
        const init = Math.floor(current/(max+1)*100)
        const final = Math.floor((current + 1)/(max+1)*100)

        scrollerRef.current.style.background = `linear-gradient(to right, #E4E4E7 ${init}%, #262626 ${init}%, #262626 ${final}%, #E4E4E7 ${final}%)`        
    }


    return (
        <Grid2
            my={{ md: '150px', xs: '75px' }}
            display='flex'
            flexDirection='column'
            rowGap='60px'
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap='5px'
            >
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Typography variant='h1'>
                        DISCOVER FASHION.
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        Products
                    </Typography>
                </Box>
                <Button variant="contained" color='primary' sx={{ alignSelf: 'end', '@media(max-width: 900px)': { order: 3 } }} >
                    View All Products
                </Button>
                <Typography variant='h6' color='grey.40' sx={{}}>
                    Dive into a world of fashion innovation at Klothink.
                    Our carefully curated collections bring together the
                    latest trends and timeless <br /> classics, ensuring you find
                    the perfect pieces for every occasion.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    borderTop: '1px solid #F1F1F3',
                    borderBottom: '1px solid #F1F1F3',
                    py: { xs: '20px', md: '24px', xl: '30px' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Box>
                    {['ALL', 'MENSWEAR', 'WOMENSWEAR', 'KIDSWEAR'].map((item, i) => (
                        <Button
                            key={i}
                            variant="text"
                            color={category === item ? 'secondary' : 'primary'}
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </Button>
                    ))}

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        '@media(max-width: 900px)': {
                            mt: '20px',
                            pt: '20px',
                            borderTop: '1px solid #F1F1F3',
                        }
                    }}
                >
                    {['Casual', 'Formal', 'Party'].map((item, i) => (
                        <Button
                            key={i}
                            variant={item === type ? 'contained' : 'outlined'}
                            color={item === type ? 'secondary' : 'primary'}
                            onClick={() => setType(item)}
                        >
                            {item}
                        </Button>
                    ))}


                </Box>
            </Grid2>
            <Grid2
                className='wrapper'
                sx={{
                    maxWidth: '1600px',
                    width: '100%',
                    px: '1px'
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
                    {[1,2,3,4,5,6,7,8,9,10].map((item,i) => (
                        <Box
                            ref={i == 0 ? firstCardRef : null}
                            key={i}
                            className='card'
                            sx={{
                                scrollSnapAlign: 'start',
                                minHeight: '350px',
                                listStyle: 'none',
                                display: 'flex',
                                cursor: 'pointer',
                                width: '98%',
                                paddingBottom: '15px',
                                flexDirection: 'column',   
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '10/12',
                                    borderRadius: '21px',
                                    mb: {xs: '16px', md: '20px', xl: '30px'},
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'contain',
                                    backgroundColor: 'white.95',
                                    position: 'relative',
                                    backgroundRepeat: 'no-repeat',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '67px',
                                        aspectRatio: '1/1',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bgcolor: '#FFF',
                                        position: 'absolute',
                                        bottom: '-5px',
                                        right: '-5px',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <IconButton

                                        disableElevation={true}
                                        sx={{
                                            borderRadius: '50%',
                                            width: '52px',
                                            aspectRatio: '1/1',
                                            bgcolor: 'yellow.50',
                                            color: '#000',
                                            '&:hover': {
                                                bgcolor: 'yellow.50',
                                            }
                                        }}>
                                        <ShoppingCartIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Typography variant='p' fontWeight='600' display='inline' sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                Classic Polo Sport
                            </Typography>
                            <Typography variant='p' color='grey.60' display='inline' sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}> 
                                $24.99
                            </Typography>
                        </Box>
                    ))}
                </Grid2>
            </Grid2>
            <Grid2
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >
                <Box
                    ref={scrollerRef}
                    sx={{
                        height: '7px',
                        flexGrow: 1,
                        background: `linear-gradient(to right, #E4E4E7 0%, #262626 0%, #262626 15%, #E4E4E7 15%)`
                    }}
                >

                </Box>
                <IconButton
                    onClick={()=> handleCarouselScroll('left')}
                    sx={{
                        ml: {xs: '50px', md: '75px', xl: '100px'},
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