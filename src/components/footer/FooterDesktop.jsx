import { Grid2, Typography, Box, IconButton, Button } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '/LogoMed.png'
import TextInput from "./TextInput";

// eslint-disable-next-line react/prop-types
export default function FooterDesktop({saveEmail, error, setInput, nav}){

    return (
        <>
            <Grid2
                display={'grid'}

                sx={{
                    gridTemplateColumns: '5fr 7fr',
                    height: '368px',
                    px: '162px',
                    borderTop: '1px solid #F1F1F3',

                    '@media(max-width: 1440px)': {
                        px: '80px',
                    },

                    '@media(max-width: 900px)': {
                        px: '16px',
                    },

                }}
            >
                <Grid2
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    rowGap='50px'
                >
                    <Box
                        sx={{
                            height: '100px',
                            width: '100px',
                            backgroundImage: `url(${Logo})`,
                            backgroundSize: 'contain',
                            mr: 'auto',
                        }}
                    >
                    </Box>
                    <Box 
                         sx={{
                            display: 'flex',
                            gap: '10px',
                            mr: 'auto'
                        }}
                    >
                        <TextInput 
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={'Enter Your Email'}
                            error={error}
                        />
                        <Button variant='contained' color='primary' onClick={saveEmail}>
                            Subscribe
                        </Button>
                    </Box>
                </Grid2>
                <Grid2
                    display='flex'
                    justifyContent={'space-evenly'}
                    alignItems={'center'}

                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '18px',

                            '& h6, h4': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <Typography variant='h4' color='grey.15' mb='18px' onClick={()=> nav('/')}>Home</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/')}>Features</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/')}>Popular Products</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/')}>Testimonials</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/')}>FAQ</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '18px',

                            '& h6, h4': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <Typography variant='h4' color='grey.15' mb='18px' onClick={()=> nav('/products?category=men')}>Menswear</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=men&type=casual')} >Casual</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=men&type=formal')} >Formal</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=men&type=party')} >Party</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=men&type=business')} >Business</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '18px',

                            '& h6, h4': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <Typography variant='h4' color='grey.15' mb='18px' onClick={()=> nav('/products?category=women')}>Womenswear</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=women&type=casual')}>Casual</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=women&type=formal')}>Formal</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=women&type=party')}>Party</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=women&type=business')}>Business</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '18px',

                            '& h6, h4': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <Typography variant='h4' color='grey.15' mb='18px' onClick={()=> nav('/products?category=kids')} >Kidswear</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=kids&type=casual')}>Casual</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=kids&type=formal')}>Formal</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=kids&type=party')}>Party</Typography>
                        <Typography variant='h6' color='grey.40' onClick={()=> nav('/products?category=kids&type=business')}>Business</Typography>
                    </Box>
                </Grid2>
            </Grid2>
            <Grid2
                display='flex'
                height='103px'
                columnGap={4}
                alignItems={'center'}
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
                <Typography variant='h6' color='grey.60'>
                    Privacy Policy
                </Typography>
                <Box
                    sx={{
                        mx: 'auto',
                        display: 'flex',
                        height: '40px',
                        gap: '21px',
                        pr: 3
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
                <Typography variant='h6' color='grey.60'>
                    © 2024 Klothink. All rights reserved.
                </Typography>
            </Grid2>
        </>
    )
}
