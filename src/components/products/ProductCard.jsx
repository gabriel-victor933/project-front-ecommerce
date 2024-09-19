import { Box, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// eslint-disable-next-line react/prop-types
export default function ProductCard({ img, cardRef }) {

    return (
        <Box
            ref={cardRef}
            className='card'
            sx={{
                scrollSnapAlign: 'start',
                minHeight: '350px',
                listStyle: 'none',
                display: 'flex',
                cursor: 'pointer',
                width: '98%',
                paddingBottom: '15px',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '16px',
                border: '1px solid #F1F1F3'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    aspectRatio: '10/12',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    mb: { xs: '16px', md: '20px', xl: '30px' },
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'contain',
                    backgroundColor: 'white.95',
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    boxSizing: 'border-box'
                }}
            >
                <Box
                    sx={{
                        aspectRatio: '1/1',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: '#FFF',
                        position: 'absolute',
                        bottom: '0px',
                        right: '15px',
                        borderRadius: '50%',
                        transform: 'translate(0%,50%)'
                    }}
                >
                    <IconButton

                        disableElevation={true}
                        sx={{
                            borderRadius: '50%',
                            width: '52px',
                            aspectRatio: '1/1',
                            bgcolor: 'absolute.white',
                            color: '#000',
                            '&:hover': {
                                bgcolor: 'yellow.50',
                            }
                        }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    py: {xs: '40px' ,md:'30px' ,xl:'20px' },
                    px: {xs: '30px' ,md:'24px' ,xl:'20px' },
                }}
            >
                <Typography variant='h4' fontWeight='600'>
                    Classic Denim Jeans
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant='h6' color='grey.60'>
                        Slim Fit
                    </Typography>
                    <Typography variant='h5' color='grey.15'>
                        $49.99
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}