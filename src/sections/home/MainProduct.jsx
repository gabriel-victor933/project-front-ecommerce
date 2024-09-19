import { Grid2, Typography, Box, Button, IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import yellow from '/jaqueta_yellow.png'
import black from '/jaqueta_black.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainProduct(){

    const [selectedImg, setSelectImg] = useState(yellow)

    const nav = useNavigate()

    return (
        <Grid2
            display={'grid'}
            sx={{
                mb: '50px',
                gridTemplateColumns: {md: '11fr 9fr', xs: '1fr'},
                gap: {xl: '80px', md: '60px', xs: '40px' },
            }}
        >
            <Grid2>
                <Box 
                    sx={{
                        display: 'flex',
                        gap: '7px',
                        mb: {xl: '24px', mb: '20px', xs: '10px'},

                        '@media(max-width: 900px)': {
                            flexDirection: 'column-reverse'
                        }
                    }}
                >
                    <Typography variant='h1'>
                        Elevate Your Style with Klothink
                     </Typography>
                    <Typography variant='h5' color='grey.60' sx={{minWidth: '190px'}}>
                        STYLE REDEFINE6.
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40' mb={{xl: '50px', mb: '40px', xs: '24px'}}>
                    Explore a world of fashion at Klothink, where trends meet affordability. 
                    Immerse yourself in the latest styles and seize exclusive promotions.
                </Typography>
                <Box
                    sx={{mb: {xl: '80px', mb: '60px', xs: '40px'},}}
                >
                    <Button variant='contained' color='primary' sx={{mr: '10px'}}>
                        <ShoppingBagOutlinedIcon sx={{mr: '5px'}}/>
                        Shop Now
                    </Button>
                    <Button variant='outlined' color='primary'>
                        Contact Us
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '100',
                        boxSizing: 'border-box',
                        
                        bgcolor: 'white.95',
                        borderRadius: '12px',
                        height: {xl: '346px', md: '276px', xs: '256px'},
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1fr 1fr',

                        p: {xl: '20px', md: '16px', xs: '10px'},
                        gap: {xl: '20px', md: '16px', xs: '10px'}
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: '12px',
                            bgcolor: 'absolute.white',
                            p: {xl: '30px', md: '24px', xs: '20px'},
                        }}
                    >
                        <Typography variant="h2">
                            OVER 1000+
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Trendsetting Styles
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: '12px',
                            bgcolor: 'absolute.white',
                            p: {xl: '30px', md: '24px', xs: '20px'},
                        }}
                    >
                        <Typography variant="h2">
                            99%
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Customer Satisfaction Rate
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: '12px',
                            bgcolor: 'absolute.white',
                            p: {xl: '30px', md: '24px', xs: '20px'},
                        }}
                    >
                        <Typography variant="h2">
                            24/7
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Shopping Convenience
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: '12px',
                            bgcolor: 'absolute.white',
                            p: {xl: '30px', md: '24px', xs: '20px'},
                        }}
                    >
                        <Typography variant="h2">
                            30-DAY
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Hassle-Free Returns
                        </Typography>
                    </Box>
                </Box>
            </Grid2>
            <Grid2 height={{xs: '438px', md: 'auto'}}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        backgroundColor: 'white.95',
                        backgroundImage: `url(${selectedImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: {xl: '80%', md: '90%', xs: '90%'},
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',

                        '@media(max-width: 900px)': {
                            backgroundSize: '100% 100%',
                        }
                    }}
                >
                    <Box 
                        sx={{
                            position: 'absolute',
                            right: '20px',
                            top: '40px',
                        }}
                    >
                        <IconButton
                            onClick={()=>setSelectImg(yellow)}
                            sx={{
                                width: '46px',
                                height: '46px',
                                bgcolor: 'absolute.white',
                                mr: '7px', 
                            }}
                        >
                            <ArrowBackIosNewIcon sx={{color: 'grey.40'}}/>
                        </IconButton>
                        <IconButton
                            onClick={()=>setSelectImg(black)}
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
                    </Box>
                    <Box 
                        sx={{
                            position: 'absolute',
                            right: '20px',
                            bottom: '40px',
                            width: '150px',
                            borderRadius: '100px',
                            height: '43px',
                            bgcolor: 'absolute.white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Typography variant='p' onClick={() => nav('/products')}>
                            View Similar
                            <ArrowRightAltIcon sx={{verticalAlign: 'middle', ml: '5px'}}/>
                        </Typography>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}