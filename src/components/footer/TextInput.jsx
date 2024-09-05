import { TextField } from "@mui/material";

export default function TextInput({placeholder, onChange}){

    return (
        <TextField 
            onChange={onChange}
            variant="outlined"
            placeholder={placeholder}
            sx={{
                

                '& .MuiInputBase-root': {
                    width: '323px',
                    borderRadius: '32px',
                    height: '49px',
                    border: '1px solid white.95',
                    backgroundColor: 'white.99',

                    '@media(max-width: 1440px)': {
                        height: '39px',
                        width: '200px'
                    }
                }
            }}
        />
    )
}