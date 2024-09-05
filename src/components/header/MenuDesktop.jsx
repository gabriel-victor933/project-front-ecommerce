import { Button, Grid2, Box } from "@mui/material";
import Logo from '/Logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuDesktop(){

    const nav = useNavigate()

    const loc = useLocation()

    return (
        <Grid2 
            item
            display={'flex'}
            width={'100%'}
            height={'95px'}
            alignItems={'center'}                
            borderBottom={'1px solid #F1F1F3'}
            columnGap={'10px'}
            sx={{
                px: '162px',

                '@media(max-width: 1440px)': {
                    px: '80px',
                }
            }}
        >
            <Button variant='outlined' color={loc.pathname != '/' ? 'primary' : 'secondary'} onClick={() => nav('/')}>Home</Button>
            <Button variant='outlined' color={!loc.pathname.includes('/products') ? 'primary' : 'secondary'} onClick={() => nav('/products')}>Products</Button>
            <Box
                sx={{
                    height: '60px',
                    width: '60px',
                    backgroundImage: `url(${Logo})`,
                    mx: 'auto'
                }}
            >
            </Box>
            <Button 
                variant='contained' 
                color='primary' 
                disableElevation={true}
                sx={{
                    borderRadius: '50%', 
                    p: 0, 
                    height: '53px',

                    '@media(max-width: 1440px)': {
                        height: '48px',
                    }
                }}>
                <ShoppingCartIcon />
            </Button>
            <Button variant='outlined' color={loc.pathname != '/support' ? 'primary' : 'secondary'} onClick={() => nav('/support')}>Contact Support</Button>
        </Grid2>
    )
}