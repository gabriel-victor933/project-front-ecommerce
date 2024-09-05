import {  Snackbar } from "@mui/material";
import { useState } from "react";
import useBreakpointUp from "../hooks/useBreakpointUp";
import FooterDesktop from "../components/footer/FooterDesktop";
import FooterMobile from "../components/footer/FooterMobile";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const nav = useNavigate()

    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)

    const isMdUp = useBreakpointUp('md')

    function saveEmail(){

        if(input.length == 0) {
            setError(true)
            return
        }

        setError(false)
        setOpenSnack(true)
    }

    return (
        <>
            {isMdUp ? 
                <FooterDesktop saveEmail={saveEmail} error={error} setInput={setInput} nav={nav}/> 
                : 
                <FooterMobile saveEmail={saveEmail} error={error} setInput={setInput} nav={nav}/>
                }
            <Snackbar 
                open={openSnack}
                autoHideDuration={3000}
                onClose={() => setOpenSnack(false)}
                TransitionComponent={'Fade'}
                message="Email has been saved"
                sx={{
                    width: '300px',
                    
                    '& .MuiPaper-root': {
                        backgroundColor: 'yellow.97',
                        color: 'grey.15',
                        fontSize: '18px'
                    }
                }}
            />            
        </>

    )
}