import { Grid2, Box, Typography } from "@mui/material"

export default function Seamless() {

    return (
        <Grid2
            mb={{ md: '150px', xs: '75px' }}
            display='flex'
            flexDirection='column'
            gap={{ xs: '40px', md: '60px', xl: '80px' }}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap={{ xl: '36px', md: '20px', xs: '16px' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                    }}
                >
                    <Typography variant='h1'>
                        SEAMLESS EXPERIENCE.
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        HOW IT WORKS?
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40' sx={{ width: { md: '85%', xs: '100%' } }}>
                    At Klothink, weve designed a straightforward shopping experience to make fashion accessible. 
                    Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    borderRadius: '20px',
                    bgcolor: 'white.99',
                    border: '1px solid #F7F7F8',
                    gap: {xl: '20px', md: '16px',xs: '10px'},
                    p: {xl: '20px', md: '16px',xs: '10px'},
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr',md: '1fr 1fr 1fr 1fr'}
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'absolute.white',
                        border: '1px solid #F1F1F3',
                        borderRadius: '16px',
                        gap: {xl: '30px', md: '24px',xs: '24px'},
                        p: {xl: '30px', md: '24px',xs: '20px'},
                        display: 'flex',
                        flexDirection: {md: 'column',xs: 'row'}
                    }}
                >
                    <Typography variant='h1' fontSize='80px' color='white.90'>
                        01
                    </Typography>
                    <Box>
                        <Typography variant='h4' fontWeight='600' mb='10px' color='grey.20'>
                            Discover Trends
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Explore our curated collection of over 1000 styles
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'absolute.white',
                        border: '1px solid #F1F1F3',
                        borderRadius: '16px',
                        gap: {xl: '30px', md: '24px',xs: '24px'},
                        p: {xl: '30px', md: '24px',xs: '20px'},
                        display: 'flex',
                        flexDirection: {md: 'column',xs: 'row'}
                    }}
                >
                    <Typography variant='h1' fontSize='80px' color='white.90'>
                        02
                    </Typography>
                    <Box>
                        <Typography variant='h4' fontWeight='600' mb='10px' color='grey.20'>
                            Secure Checkout
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Add your items to the cart and proceed to our secure checkout.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'absolute.white',
                        border: '1px solid #F1F1F3',
                        borderRadius: '16px',
                        gap: {xl: '30px', md: '24px',xs: '24px'},
                        p: {xl: '30px', md: '24px',xs: '20px'},
                        display: 'flex',
                        flexDirection: {md: 'column',xs: 'row'}
                    }}
                >
                    <Typography variant='h1' fontSize='80px' color='white.90'>
                        03
                    </Typography>
                    <Box>
                        <Typography variant='h4' fontWeight='600' mb='10px' color='grey.20'>
                            Swift Dispatch
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Experience 95% same-day dispatch on orders.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'absolute.white',
                        border: '1px solid #F1F1F3',
                        borderRadius: '16px',
                        gap: {xl: '30px', md: '24px',xs: '24px'},
                        p: {xl: '30px', md: '24px',xs: '20px'},
                        display: 'flex',
                        flexDirection: {md: 'column',xs: 'row'}
                    }}
                >
                    <Typography variant='h1' fontSize='80px' color='white.90'>
                        04
                    </Typography>
                    <Box>
                        <Typography variant='h4' fontWeight='600' mb='10px' color='grey.20'>
                            Unbox Happiness
                        </Typography>
                        <Typography variant='h6' color='grey.40'>
                            Receive your carefully packaged Klothink order.
                        </Typography>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}