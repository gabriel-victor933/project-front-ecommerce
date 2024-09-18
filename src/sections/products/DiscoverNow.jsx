import { Grid2, Box, Typography } from "@mui/material"

export default function DiscoverNow() {

    return (
        <Grid2
            display={'grid'}
            sx={{
                alignItems: 'end',
                mb: '50px',
                gridTemplateColumns: { md: '1fr 1fr', xs: '1fr' },
                gap: { xl: '80px', md: '60px', xs: '40px' },
            }}
        >
            <Grid2>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '7px',
                        mb: { xl: '36px', mb: '24px', xs: '16px' },
                        flexDirection: { md: 'row', xs: 'column-reverse' },
                    }}
                >
                    <Typography variant='h1'>
                        DISCOVER NOW
                    </Typography>
                    <Typography variant='h5' color='grey.60' sx={{ minWidth: '190px' }}>
                        PRODUCTS
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40'>
                    Dive into the world of fashion excellence at Klothink.
                    Our curated selection brings together the latest trends and timeless classics,
                    offering you a diverse array of clothing items that resonate with your unique style.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    border: '1px solid #F1F1F3',
                    borderRadius: '20px',
                    gap: { xl: '20px', md: '16px', xs: '8px' },
                    py: { xl: '40px', md: '30px', xs: '20px' },
                    px: { xl: '50px', md: '40px', xs: '20px' },
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>Exclusive Offers</Typography>
                    <Typography variant='h6' color='grey.40'>30% off on select items</Typography>
                </Box>
                <Box sx={{height: '77px', width: '1px', bgcolor: '#F1F1F3'}}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>New Arrivals</Typography>
                    <Typography variant='h6' color='grey.40'>50+ new arrivals Daily</Typography>
                </Box>
                <Box sx={{height: '77px', width: '1px', bgcolor: '#F1F1F3'}}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>Over 1,500 +</Typography>
                    <Typography variant='h6' color='grey.40'>curated fashion products</Typography>
                </Box>
            </Grid2>
        </Grid2>
    )
}