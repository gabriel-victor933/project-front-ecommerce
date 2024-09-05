import { Button, Grid2, Box, IconButton, Menu, MenuItem } from "@mui/material";
import Logo from '/Logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SegmentSharpIcon from '@mui/icons-material/SegmentSharp';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuMobile() {

    const nav = useNavigate()

    const loc = useLocation()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = (route) => {
        setAnchorEl(null);
        nav(route)
    };

    return (
        <Grid2
            item='true'
            display={'flex'}
            width={'100%'}
            height={'84px'}
            alignItems={'center'}
            borderBottom={'1px solid #F1F1F3'}
            columnGap={'10px'}
            sx={{
                px: '16px',

            }}
        >
            <Box
                sx={{
                    height: '35px',
                    width: '35px',
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: 'contain',
                    mr: 'auto'
                }}
            >
            </Box>
            <Button
                variant='contained'
                color='primary'
                disableElevation={true}
                sx={{
                    borderRadius: '50%',
                    p: '0px !important',
                    height: '45px'
                }}>
                <ShoppingCartIcon />
            </Button>
            <IconButton
                disableRipple={true}
                onClick={handleClick}
                sx={{
                    pr: 0,
                }}
            >
                <SegmentSharpIcon sx={{ fontSize: '35px', color: 'grey.10' }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose('/')}>
                    <Button
                        variant="text"
                        color='primary'
                        disableTouchRipple={true}
                        sx={{
                            color: loc.pathname == '/' ? 'grey.10': '',
                            '&:hover': {
                                bgcolor: 'transparent'
                            }
                        }}
                    >
                        Home
                    </Button>
                </MenuItem>
                <MenuItem onClick={() => handleClose('/products')}>
                    <Button
                        variant="text"
                        color='primary'
                        disableTouchRipple={true}
                        sx={{
                            color: loc.pathname.includes('/products') ? 'grey.10': '',
                            '&:hover': {
                                bgcolor: 'transparent'
                            }
                        }}
                    >
                        Products
                    </Button>
                </MenuItem>
                <MenuItem onClick={() => handleClose('/support')}>
                    <Button
                        variant="text"
                        color='primary'
                        disableTouchRipple={true}
                        sx={{
                            color: loc.pathname == '/support' ? 'grey.10': '',
                            '&:hover': {
                                bgcolor: 'transparent'
                            }
                        }}
                    >
                        Contact Support
                    </Button>
                </MenuItem>
            </Menu>
        </Grid2>
    )
}
