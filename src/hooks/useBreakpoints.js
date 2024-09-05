import { useMediaQuery } from "@mui/material";

export default function useBreakpointUp(breakpoint){
    return useMediaQuery(theme => theme.breakpoints.up(breakpoint))
}