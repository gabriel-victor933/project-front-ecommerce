import { Grid2, Box, Typography } from "@mui/material";
import ExperienceCard from "../../components/home/ExperienceCard";
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';  

export default function Experience(){

    const [showAll, setShowAll] = useState(false)
    const isMobile = useIsMobile()

    return (
        <Grid2
             mb={{ md: '150px', xs: '75px' }}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap={{xl: '36px', md: '20px', xs: '16px'}}
                mb={{xl: '80px', md: '60px', xs: '40px'}}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column-reverse',md: 'row'},
                    }}
                >
                    <Typography variant='h1'>
                        THE KLOTHINK EXPERIENCE.
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        ABOUT US 
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40' sx={{width: {md: '85%', xs: '100%'}}}>
                    At Klothink, we breathe life into fashion, blending creativity with commitment. 
                    Our journey is fueled by a dedication to delivering unparalleled style and quality.
                    Join us in redefining fashion and embracing a community where every purchase 
                    tells a story.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    p: {xs: '10px',md: '20px', xl: '30px'},
                    gap: {xs: '10px',md: '20px', xl: '30px'},
                    borderRadius: '20px',
                    bgcolor: 'white.95',
                    display: 'grid',
                    gridTemplateColumns: {xl: '1fr 1fr 1fr', md: '1fr  1fr', xs: '1fr'}
                }}
            >
                <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                    <StarIcon />
                </ExperienceCard>
                <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                    <StarIcon />
                </ExperienceCard>
                

                {(!isMobile || showAll) && (
                    <>
                        <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                            <StarIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                            <StarIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                            <StarIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Passionate Craftsmanship'} text={'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'}>
                            <StarIcon />
                        </ExperienceCard>
                    </>
                )}
                
                {isMobile && (
                    <Typography variant='h5' color='grey.30' textAlign='center' sx={{ cursor: 'pointer' }} onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'View Less' : 'View All'} <SouthOutlinedIcon sx={{ fontSize: '16px', verticalAlign: 'text-top', transform: showAll ? 'rotate(180deg)': '' }} />
                    </Typography>
                )}

            </Grid2>
        </Grid2>
    )
}