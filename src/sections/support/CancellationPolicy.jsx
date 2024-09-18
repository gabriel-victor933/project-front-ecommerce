import { Grid2, Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function CancellationPolicy() {

    return (
        <Grid2
            mb={{ xs: '60px', md: '90px', xl: '120px' }}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap='5px'
                mb={{ xs: '40px', md: '60px', xl: '80px' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        gap: '15px'
                    }}
                >
                    <Typography variant='h1'>
                        CANCELLATION POLICY
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        Flexible Ordering Experience
                    </Typography>
                </Box>
                <Button variant="outlined" color='secondary' sx={{ alignSelf: 'end', '@media(max-width: 900px)': { order: 3, mt: '10px', alignSelf: 'start' } }} >
                    Read Cancellation Policy
                    <ArrowRightAltIcon sx={{ verticalAlign: 'middle', ml: '5px' }} />
                </Button>
                <Typography variant='h6' color='grey.40' sx={{}}>
                    Familiarize yourself with our cancellation policy to make changes to your order with ease.
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
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>Cancellation Window</Typography>
                    <Typography variant='h6' color='grey.40'>Orders can be canceled within 24 hours of placement for a full refund.</Typography>
                </Box>
                <Box sx={{height: '77px', width: '1px', bgcolor: '#F1F1F3'}}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>Cancellation Process</Typography>
                    <Typography variant='h6' color='grey.40'>Visit our Order Management section to cancel your order effortlessly.</Typography>
                </Box>
                <Box sx={{height: '77px', width: '1px', bgcolor: '#F1F1F3'}}></Box>
                <Box>
                    <Typography variant='h3' color='grey.15' mb={{xs: '6px', md: '10px', xl: '14px'}}>Refund Timeline</Typography>
                    <Typography variant='h6' color='grey.40'>Refunds for canceled orders are processed within 5-7 business days.</Typography>
                </Box>
            </Grid2>
        </Grid2>
    )
}