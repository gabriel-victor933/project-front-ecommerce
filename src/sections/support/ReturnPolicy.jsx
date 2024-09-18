import { Grid2, Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ReturnPolicy(){

    return (
        <Grid2
            mb={{xs: '60px', md: '80px', xl: '120px'}}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap='5px'
                mb={{xs: '40px', md: '60px', xl: '80px'}}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column-reverse', md: 'row'},
                        gap: '15px'
                    }}
                >
                    <Typography variant='h1'>
                        RETURN POLICY
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        EASY RETURNS AT KLOTHINK
                    </Typography>
                </Box>
                <Button variant="outlined" color='secondary' sx={{ alignSelf: 'end', '@media(max-width: 900px)': { order: 3, mt: '10px', alignSelf: 'start' } }} >
                    Read Return Policy 
                    <ArrowRightAltIcon sx={{verticalAlign: 'middle', ml: '5px'}}/>
                </Button>
                <Typography variant='h6' color='grey.40' sx={{}}>
                    Explore our hassle-free return policy designed to ensure your 
                    satisfaction with every purchase.
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
                    <Typography variant='h3' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>Eligibility</Typography>
                    <Typography variant='h6' color='grey.40'>Items must be unused, with tags attached, and returned within 30 days of delivery.</Typography>
                </Box>
                <Box sx={{ height: '77px', width: '1px', bgcolor: '#F1F1F3' }}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>Process</Typography>
                    <Typography variant='h6' color='grey.40'>Initiate returns through our Return Center for a smooth and efficient process.</Typography>
                </Box>
                <Box sx={{ height: '77px', width: '1px', bgcolor: '#F1F1F3' }}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{ xs: '6px', md: '10px', xl: '14px' }}>Refund</Typography>
                    <Typography variant='h6' color='grey.40'>Expect a refund to your original payment method within 7-10 business days .</Typography>
                </Box>
            </Grid2>
        </Grid2>
    )
}