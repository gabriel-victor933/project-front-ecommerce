import { useMediaQuery } from "@mui/material";

export default function useIsMobile(){
    return useMediaQuery((theme) => theme.breakpoints.down('md'))
}