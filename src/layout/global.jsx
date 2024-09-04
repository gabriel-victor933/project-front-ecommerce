import { Button, Grid2 as Grid, Typography } from "@mui/material";
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
            <Typography variant='h1'>Footer</Typography>
            <Typography variant='h2'>Footer</Typography>
            <Typography variant='h3'>Footer</Typography>
            <Typography variant='h4'>Footer</Typography>
            <Typography variant='h5'>Footer</Typography>
            <Typography variant='h6'>Footer</Typography>
            <Typography variant='p'>Footer</Typography>
            <Button variant="contained" color="primary">teste</Button>
            <Button variant="contained" color="secondary">teste</Button>
        </Grid>
        
    )
}