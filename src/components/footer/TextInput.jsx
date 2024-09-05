import { TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function TextInput({ placeholder, onChange, error }) {

    return (
        <TextField
            onChange={onChange}
            variant="outlined"
            placeholder={placeholder}
            error={error}
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
                    },

                    '@media(max-width: 900px)': {
                        height: '39px',
                        width: '60vw'
                    },
                },


                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: 'grey.15'
                    }
                }

            }}
        />
    )
}