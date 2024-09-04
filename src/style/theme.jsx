import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        absolute: {
            white: '#FFF',
            black: '#000',
        },
        yellow: {
            50: '#FFD500',
            55: '#FFD81A',
            70: '#FF3566',
            80: '#FFEE99',
            90: '#FFF6CC',
            95: '#FFFAE5',
            97: '#FFFCF0',
            99: '#FFFEFA',
        },
        white: {
            90: '#E4E4E7',
            95: '#F1F1F3',
            97: '#F7F7F8',
            99: '#FCFCFD',
        },
        grey: {
            10: '#1A1A1A',
            15: '#262626',
            20: '#333333',
            30: '#4C4C4D',
            35: '#59595A',
            40: '#656567',
            60: '#98989A',
            70: '#B3B3B3',
        }
    },
    typography: {
        fontFamily: ['Manrope']
    },
    components: {
        MuiTypography: {
            styleOverrides:{
                h1: {
                    fontSize: '48px',
                    fontWeight: '600',
                    color: 'grey.10'
                },
                h2: {
                    fontSize: '34px',
                    fontWeight: '600',
                    color: 'grey.10'
                },
                h3: {
                    fontSize: '24px',
                    fontWeight: '600',
                    color: 'grey.10'
                },
                h4: {
                    fontSize: '20px',
                    fontWeight: '400',
                    color: 'grey.60'
                },
                h5: {
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'grey.60'
                },
                h6: {
                    fontSize: '18px',
                    fontWeight: '400',
                    color: 'grey.40'
                },
                p: {
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'grey.40'
                },
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFD500',
                    width: 'fit-content',
                    padding: '8px 30px 8px 30px',
                },
               containedPrimary: {
                backgroundColor: 'red'
               }
            }
        }
    }
})