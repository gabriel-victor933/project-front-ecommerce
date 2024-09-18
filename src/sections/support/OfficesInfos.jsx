import { Grid2, Typography, Box, Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneIcon from '@mui/icons-material/Phone';

export default function OfficesInfos(){

    return (
        <Grid2
            mb={{xs: '50px', md: '90px', xl: '110px'}}
        >
            <Typography variant='p' >
                    Office Locations
            </Typography>
            <Grid2
                sx={{
                    border: '1px solid #F1F1F3',
                    borderRadius: '20px',
                    p: {xl: '50px', md: '40px', xs: '24px'},
                    gap: {xl: '50px', md: '40px', xs: '30px'},
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: '1fr 1fr 1fr'}
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Typography variant='h5' color='grey.15'>
                        New York City, USA
                    </Typography>
                    <Typography variant='p' fontSize='14px' color='grey.40'>
                        123 Fashion Avenue, Suite 456, New York, NY 10001
                    </Typography>
                    <Box sx={{mt: {xl: '20px', md: '14px', xs: '10px'}}}>
                        <Button variant='outlined' color='primary'>
                            <PhoneIcon  sx={{verticalAlign: 'middle', mr: '5px'}}/>
                            Call Now
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ml: '10px'}}>
                            Get Direction
                            <ArrowRightAltIcon sx={{verticalAlign: 'middle', ml: '5px'}}/>
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Typography variant='h5' color='grey.15'>
                        Paris, France
                    </Typography>
                    <Typography variant='p' fontSize='14px' color='grey.40'>
                        789 Rue de la Mode, Paris 75001
                    </Typography>
                    <Box sx={{mt: {xl: '20px', md: '14px', xs: '10px'}}}>
                        <Button variant='outlined' color='primary'>
                            <PhoneIcon  sx={{verticalAlign: 'middle', mr: '5px'}}/>
                            Call Now
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ml: '10px'}}>
                            Get Direction
                            <ArrowRightAltIcon sx={{verticalAlign: 'middle', ml: '5px'}}/>
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Typography variant='h5' color='grey.15'>
                        Tokyo, Japan
                    </Typography>
                    <Typography variant='p' fontSize='14px' color='grey.40'>
                        456 Shibuya Fashion Street, Shibuya-ku, Tokyo
                    </Typography>
                    <Box sx={{mt: {xl: '20px', md: '14px', xs: '10px'}}}>
                        <Button variant='outlined' color='primary'>
                            <PhoneIcon  sx={{verticalAlign: 'middle', mr: '5px'}}/>
                            Call Now
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ml: '10px'}}>
                            Get Direction
                            <ArrowRightAltIcon sx={{verticalAlign: 'middle', ml: '5px'}}/>
                        </Button>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}