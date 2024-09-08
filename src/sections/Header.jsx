import {  Grid2, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import useBreakpointUp from "../hooks/useBreakpointUp";
import MenuDesktop from "../components/header/MenuDesktop";
import MenuMobile from "../components/header/MenuMobile";

export default function Header(){

    const isMdUp = useBreakpointUp('md')

    return (
        <Grid2 container component='header'>
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
            {isMdUp ? <MenuDesktop /> : <MenuMobile />}
        </Grid2>
    )
}