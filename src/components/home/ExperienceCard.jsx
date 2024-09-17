import { Box, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export default function ExperienceCard({children, title, text}){
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'absolute.white',
                border: '1px solid #F1F1F3',
                borderRadius: '20px',
                p: {xs: '24px', md: '30px', xl: '40px'},
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    mb: {xs: '16px', md: '20px', xl: '24px'},
                }}
            >
                <Box
                    sx={{
                        width: {xs: '44px', md: '48px', xl: '56px'},
                        aspectRatio: '1/1',
                        bgcolor: 'yellow.50',
                        color: 'grey.15',
                        fontSize: {xs: '20px', xl: '26px'},
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >
                    {children}
                </Box>
                <Typography variant='h4' fontWeight='600'>
                    {title}
                </Typography>
            </Box>
            <Typography variant='p' color='grey.40'>
                {text}
            </Typography>
        </Box>
    )
}