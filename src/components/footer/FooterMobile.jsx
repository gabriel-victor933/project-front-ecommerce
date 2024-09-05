import { Grid2, Typography, Box, IconButton, Button } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '/LogoMed.png'
import TextInput from "./TextInput";

// eslint-disable-next-line react/prop-types
export default function FooterMobile({saveEmail, error, setInput, nav}){

    return(
        <>
            <Grid2
                sx={{
                    borderTop: '1px solid #F1F1F3',
                    px: '16px',
                    height: '249px',
                    pt: '30px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        mb: '24px',
                    }}
                >
                    <Box
                        sx={{
                            height: '50px',
                            width: '50px',
                            backgroundImage: `url(${Logo})`,
                            backgroundSize: 'contain',
                            mr: 'auto',
                        }}
                    >
                    </Box>

                    <Box
                    sx={{
                        display: 'flex',
                        height: '40px',
                        gap: '21px',
                    }}
                >
                    <IconButton
                        disableRipple={true}
                        sx={{
                            bgcolor: 'grey.15',
                            color: "absolute.white"
                        }}
                    >
                        <FacebookRoundedIcon />
                    </IconButton>
                    <IconButton
                        disableRipple={true}
                        sx={{
                            bgcolor: 'grey.15',
                            color: "absolute.white"
                        }}
                    >
                        <XIcon />
                    </IconButton>
                    <IconButton
                        disableRipple={true}
                        sx={{
                            bgcolor: 'grey.15',
                            color: "absolute.white"
                        }}
                    >
                        <InstagramIcon />
                    </IconButton>
                </Box>
                </Box>

                <Box 
                         sx={{
                            display: 'flex',
                            gap: '6px',
                            mb: '30px',
                        }}
                    >
                        <TextInput 
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={'Enter Your Email'}
                            error={error}
                        />
                        <Button variant='contained' color='primary' onClick={saveEmail} sx={{flexGrow: 1}}>
                            Subscribe
                        </Button>
                </Box>

                <Box
                    sx={{
                        borderTop: '1px solid #F1F1F3',
                        display: 'flex',
                        justifyContent: 'space-around',
                        pt: '24px'
                    }}
                >
                    <Typography variant='h6' onClick={() => nav('/')} sx={{cursor: 'pointer'}}>
                        Home
                    </Typography>
                    <Typography variant='h6' onClick={() => nav('/products')} sx={{cursor: 'pointer'}}>
                        Products
                    </Typography>
                    <Typography variant='h6' onClick={() => nav('/support')} sx={{cursor: 'pointer'}}>
                        Contact
                    </Typography>
                </Box>
                
            </Grid2>
            <Grid2
                display='flex'
                height='114px'
                columnGap={4}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                sx={{
                    borderTop: '1px solid #F1F1F3',
                    px: '162px',

                    '@media(max-width: 1440px)': {
                        px: '80px',
                    },

                    '@media(max-width: 900px)': {
                        px: '16px',
                    },
                }}
            >
                <Typography variant='h6' color='grey.60'>
                    Terms & Conditions
                </Typography>
                <Typography variant='h6' color='grey.60' mb='14px'> 
                    Privacy Policy
                </Typography>
                <Typography variant='h6' color='grey.40'>
                    © 2024 Klothink. All rights reserved.
                </Typography>
            </Grid2>
        </>
    )
}