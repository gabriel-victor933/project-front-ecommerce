import {  Grid2 as Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";

export default function Global(){

    return (
        <Grid 
            container
            flexDirection={'column'}    
        >
            <Header />
            <Outlet />
            <>Footer</>
        </Grid>
        
    )
}