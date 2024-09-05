import {  Grid2 as Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";

export default function Global(){

    return (
        <Grid 
            container
            flexDirection={'column'}    
            minHeight={'100vh'}
        >
            <Header />
            <Grid
                sx={{
                    flexGrow: 1,
                    px: '162px',

                    '@media(max-width: 1440px)': {
                    px: '80px',
                    },

                    '@media(max-width: 900px)': {
                    px: '16px',
                    },
                    bgcolor: 'yellow'
                }}
            >
                main
            </Grid>
            <Outlet />
        </Grid>
        
    )
}