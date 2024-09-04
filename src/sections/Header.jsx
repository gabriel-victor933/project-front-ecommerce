import { Button, Grid2, Typography, Box } from "@mui/material";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '/Logo.png'

export default function Header(){

    return (
        <Grid2 container>
            <Grid2 
                item
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'grey.10'}
                width={'100%'}
                height={'67px'}
            >
                <Typography
                    variant="h6"
                    color='absolute.white'
                >
                    Subscribe to our Newsletter For Latest Collections
                    <ArrowOutwardOutlinedIcon color='#FFF' sx={{verticalAlign: 'text-top', ml: 1}}/>
                </Typography>
            </Grid2>
            <Grid2 
                item
                display={'flex'}
                width={'100%'}
                height={'95px'}
                px={'162px'}
                alignItems={'center'}                
                borderBottom={'1px solid #F1F1F3'}
                columnGap={'10px'}
            >
                <Button variant='outlined' color='primary'>Home</Button>
                <Button variant='outlined' color='primary'>Products</Button>
                <Box
                    sx={{
                        height: '60px',
                        width: '60px',
                        backgroundImage: `url(${Logo})`,
                        mx: 'auto'
                    }}
                >
                </Box>
                <Button variant='contained' color='primary' sx={{borderRadius: '50%', p: 0, height: '53px'}}>
                    <ShoppingCartIcon />
                </Button>
                <Button variant='outlined' color='primary'>Contact Support</Button>
            </Grid2>
        </Grid2>
    )
}