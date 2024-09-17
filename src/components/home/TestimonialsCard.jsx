import { Box, Typography } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate';

// eslint-disable-next-line react/prop-types
export default function TestimonialsCard({ testimonial, name, stars, firstCardRef }) {


    function renderingStars(){
        const arr = []
        for(let i = 0; i < stars; i++){
            arr.push(<StarRateIcon sx={{color: '#FFCE22'}}/>)
        }
        return arr
    }

    return (
        <>
            <Box
                ref={firstCardRef}
                sx={{
                    bgcolor: 'absolute.white',
                    width: '100%',
                    p: { xl: '50px', md: '40px', xs: '30px' },
                    border: '1px solid #F1F1F3',
                    borderRadius: '20px',
                    scrollSnapAlign: 'center',
                    listStyle: 'none',
                    maxWidth: '100%', // Garantir que o card não ultrapasse a área visível
                    overflow: 'hidden'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: '10px', xl: '15px' },
                        mb: { xs: '15px', md: '20px', xl: '30px' },
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '50px', xl: '70px' },
                            aspectRatio: '1/1',
                            borderRadius: '50%',
                            bgcolor: '#FFEEB2'
                        }}
                    >
                    </Box>
                    <Box 
                        sx={{width: '50%'}}
                    >
                        <Typography variant='h4' color='grey.15' 
                            sx={{
                                whiteSpace: "nowrap", 
                                overflow: "hidden", 
                                textOverflow: "ellipsis", 
                                maxWidth: '100%'
                        }}>
                            {name}
                        </Typography>
                        {renderingStars()}
                    </Box>

                </Box>
                <Typography variant="h6" color='grey.30' sx={{ }}>
                    {testimonial}
                </Typography>

            </Box>
        </>
    )
}