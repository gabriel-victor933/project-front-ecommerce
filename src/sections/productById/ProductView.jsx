import { Grid2, Box, Button, Typography } from "@mui/material";
import img from '/jaqueta_black.png'
import img2 from '/jaqueta_yellow.png'
import { useEffect, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const infos = ["Standard shipping: 3-5 business days", "Express shipping options available at checkout"]

const features = [
    "Distressed detailing for a rugged look",
    "Button-up front closure with engraved metal buttons",
    "Two side pockets for added functionality",
    "Adjustable buttoned cuffs for a personalized fit",
    "Back waist tabs for customizable styling"
]

export default function ProductView() {

    const [imgFocus, setImgFocus] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    useEffect(() => {
        setImgFocus(img)
    }, [])

    return (
        <Grid2
            mb={{ md: '150px', xs: '75px' }}
            display='grid'
            sx={{
                gridTemplateColumns: { md: '6fr 7fr', xs: '1fr' },
                gap: { xs: '40px', xl: '50px' },
            }}
        >
            <Grid2
                bgcolor='white.97'
                borderRadius='20px'
                width='100%'
                sx={{
                    aspectRatio: '1/1',

                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${imgFocus})`,
                        backgroundSize: { xl: '80%', md: '90%', xs: '90%' },
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: { md: '107px', xs: '72px' },
                            borderRadius: '12px',
                            border: '1px solid #F1F1F3',
                            p: '10px',
                            gap: '12px',
                            bgcolor: 'absolute.white',
                            ml: { md: '20px', xs: '10px' },
                            display: 'grid',
                            gridTemplateRows: '1fr 1fr 1fr 1fr'
                        }}
                    >
                        <Box
                            onClick={() => setImgFocus(img)}
                            sx={{
                                bgcolor: 'white.97',
                                borderRadius: '8px',
                                width: '100%',
                                aspectRatio: '1/1',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                            }}
                        >
                        </Box>
                        <Box
                            onClick={() => setImgFocus(img2)}
                            sx={{
                                bgcolor: 'white.97',
                                borderRadius: '8px',
                                width: '100%',
                                aspectRatio: '1/1',
                                backgroundImage: `url(${img2})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                            }}
                        >
                        </Box>
                        <Box
                            onClick={() => setImgFocus(img)}
                            sx={{
                                bgcolor: 'white.97',
                                borderRadius: '8px',
                                width: '100%',
                                aspectRatio: '1/1',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                            }}
                        >
                        </Box>
                        <Box
                            onClick={() => setImgFocus(img2)}
                            sx={{
                                bgcolor: 'white.97',
                                borderRadius: '8px',
                                width: '100%',
                                aspectRatio: '1/1',
                                backgroundImage: `url(${img2})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
            </Grid2>
            <Grid2
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xl: '20px', xs: '16px' }
                }}
            >
                <Grid2
                    display='flex'
                    justifyContent='space-between'
                    flexWrap='wrap'
                    gap={{ xs: '24px', md: '0px' }}
                >
                    <Box>
                        <Typography
                            variant='h6'
                            color='grey.40'
                            sx={{
                                '& small': {
                                    fontSize: '14px',
                                    ml: '10px',
                                    bgcolor: 'yellow.70',
                                    borderRadius: '30px',
                                    px: '12px',
                                    color: 'grey.15'
                                }
                            }}
                        >
                            Men&#39;s Casual Outerwear
                            <small>
                                12 left
                            </small>
                        </Typography>
                        <Typography variant='h3' sx={{ mb: '14px' }}>
                            Urban Explorer Denim Jacket
                        </Typography>
                        <Typography variant='h2' fontWeight='700'>
                            $69.99
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant='contained' color='secondary' sx={{ mr: '10px' }}>
                           <ShoppingBagOutlinedIcon sx={{mr: '5px'}}/>
                            Buy Now
                        </Button>
                        <Button variant='outlined' color='primary'>
                            <ShoppingCartIcon sx={{mr: '5px'}}/>
                            Add To cart
                        </Button>
                    </Box>

                </Grid2>
                <Grid2
                    sx={{
                        borderRadius: '20px',
                        border: '1px solid #F1F1F3',
                        p: { xl: '30px', md: '24px', xs: '20px' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            mb: { xl: '20px', md: '16px', xs: '10px' },
                        }}
                    >
                        <Box>
                            <Typography variant='h6' color='grey.15' fontWeight='500'>
                                Material
                            </Typography>
                            <Typography variant='h6' color='grey.40'>
                                High-Quality Denim (100% Cotton)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' color='grey.15' fontWeight='500'>
                                Fit
                            </Typography>
                            <Typography variant='h6' color='grey.40'>
                                Classic Fit
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                        }}
                    >
                        <Box>
                            <Typography variant='h6' color='grey.15' fontWeight='500'>
                                color
                            </Typography>
                            <Box
                                sx={{
                                    p: '8px',
                                    gap: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #F1F1F3',
                                    width: 'min-content',
                                    borderRadius: '100px'
                                }}
                            >
                                {['#262626',"#DAA573","#DAD673"].map((color,i) => (
                                    <Box
                                    key={i}
                                    onClick={() => setSelectedColor(color)}
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        bgcolor: color,
                                        cursor: 'pointer',
                                        display: 'grid',
                                        placeItems: 'center',
                                        color: color > '#8888' ? 'grey.15' :'white.95',
                                    }}
                                >
                                    {selectedColor === color ? 'X': ''}
                                </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='h6' color='grey.15' fontWeight='500'>
                                Sizes
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                {['S','M','L','XL','XXL'].map((size,i) => (
                                    <Box
                                        onClick={() => setSelectedSize(size)}
                                        key={i}
                                        sx={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '4px',
                                            border: '1px solid #F1F1F3',
                                            display: 'grid',
                                            placeItems: 'center',
                                            fontSize: '18px',
                                            bgcolor: size === selectedSize ? 'grey.15': 'white.97',
                                            color: size !== selectedSize ? 'grey.15': 'white.97',
                                        }}  
                                    >
                                        {size}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Grid2>
                <Grid2
                    sx={{
                        borderRadius: '20px',
                        border: '1px solid #F1F1F3',
                        p: { xl: '30px', md: '24px', xs: '20px' },
                    }}
                >
                    <Typography variant='h4' fontWeight='500'>
                        Shipping Information
                    </Typography>
                    <ul style={{marginBottom: '0px'}}>
                        {infos.map((info, i) => (
                            <li key={i}>
                                <Typography variant='h6' color='grey.40'>
                                    {info}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid2>
                <Grid2
                    sx={{
                        borderRadius: '20px',
                        border: '1px solid #F1F1F3',
                        p: { xl: '30px', md: '24px', xs: '20px' },
                    }}
                >
                    <Typography variant='h4' fontWeight='500'>
                        Features
                    </Typography>
                    <ul style={{marginBottom: '0px'}}>
                        {features.map((info, i) => (
                            <li key={i} style={{marginTop: '5px', marginBottom: '5px'}}>
                                <Typography variant='h6' color='grey.40'>
                                    {info}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}