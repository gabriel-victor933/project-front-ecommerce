import { useEffect, useState } from "react";
import DiscoverNow from "../sections/products/DiscoverNow";
import { Grid2, Box, Button } from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useLocation } from "react-router-dom";
import useIsMobile from '../hooks/useIsMobile'
import CasualCollection from "../sections/products/CasualCollection";
import FormalCollection from "../sections/products/FormalCollection";
import ActiveCollection from "../sections/products/ActiveCollection";
import BusinessCollection from "../sections/products/BusinessCollection";

export default function Products() {

    const [selected, setSelected] = useState('ALL')

    const isMobile = useIsMobile()

    let location = useLocation();

    useEffect(() => {
        if(location.search){
            const searchParams = new URLSearchParams(location.search)

            const category = searchParams.get('category')
            if(category){
                switch(category){
                    case 'men': setSelected('MENSWEAR');break;
                    case 'women': setSelected('WOMENSWEAR');break;
                    case 'kids': setSelected('KIDSWEAR');break;
                }
            }
        }
    },[location])

    function renderIcon(item) {
        switch (item) {
            case 'MENSWEAR': return <ManIcon />
            case 'WOMENSWEAR': return <WomanIcon />
            case 'KIDSWEAR': return <ChildFriendlyIcon />
            case 'ALL': return <></>
        }
    }

    return (
        <>
            <DiscoverNow />
            <Grid2
                display='flex'
                justifyContent={'center'}
                mb={{ xs: '60px', xl: '80px' }}
            >
                <Box
                    sx={{
                        border: '1px solid #F1F1F3',
                        display: 'flex',
                        gap: '10px',
                        p: '10px',
                        borderRadius: '100px'
                    }}
                >
                    {['ALL', 'MENSWEAR', 'WOMENSWEAR', 'KIDSWEAR'].map((item, i) => (
                        <Button
                            key={i}
                            variant={selected === item ? 'contained' : 'outlined'}
                            color={selected === item ? 'primary' : 'secondary'}
                            onClick={() => setSelected(item)}
                        >
                            <>
                                {renderIcon(item)}
                                {!isMobile ? item : item == 'ALL' ? 'ALL' : ''}
                                
                            </>

                        </Button>
                    ))}
                </Box>
            </Grid2>
            <CasualCollection selected={selected}/>
            <FormalCollection selected={selected}/>
            <ActiveCollection selected={selected}/>
            <BusinessCollection selected={selected}/>
        </>
    )
}