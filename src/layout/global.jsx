import {  Grid2 as Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Global(){

    return (
        <Grid 
            container
            flexDirection={'column'}    
        >
            <>Header</>
            <Outlet />
            <>Footer</>
        </Grid>
        
    )
}