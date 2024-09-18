import { Grid2, Box, Typography } from "@mui/material"

export default function SupportCover() {

    return (
        <Grid2
            display={'grid'}
            sx={{
                alignItems: 'end',
                mb: {xs: '40px', md: '80px', xl: '100px'},
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
                        KLOTHINK SUPPORT
                    </Typography>
                    <Typography variant='h5' color='grey.60' sx={{ minWidth: '190px' }}>
                        Your Fashion Ally
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40'>
                    24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.
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
                    <Typography variant='h6' color='grey.40'>Email</Typography>
                    <Typography variant='h4' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>support@klothink.com</Typography>
                </Box>
                <Box sx={{ height: '50px', width: '1px', bgcolor: '#F1F1F3' }}></Box>
                <Box>
                <Typography variant='h6' color='grey.40'>Call Us On</Typography>
                <Typography variant='h4' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ height: '50px', width: '1px', bgcolor: '#F1F1F3' }}></Box>
                <Box>
                <Typography variant='h6' color='grey.40'>Working Hours</Typography>
                <Typography variant='h4' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>Available 24/7 </Typography>
                </Box>
            </Grid2>
        </Grid2>
    )
}