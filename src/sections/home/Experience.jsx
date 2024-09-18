import { Grid2, Box, Typography } from "@mui/material";
import ExperienceCard from "../../components/home/ExperienceCard";
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';  
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';

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
                <ExperienceCard title={'Fashion Forward'} text={"We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence."}>
                    <HikingOutlinedIcon />
                </ExperienceCard>
                

                {(!isMobile || showAll) && (
                    <>
                        <ExperienceCard title={'Customer-Centric Approach'} text={"At Klothink, our customers are at the heart of everything we do. Your satisfaction is our measure of success."}>
                            <LightbulbOutlinedIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Global Inspiration'} text={"Influenced by global trends, we bring you a diverse and dynamic collection."}>
                            <CampaignOutlinedIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Empowering Your Style'} text={"Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression."}>
                            <AutoAwesomeRoundedIcon />
                        </ExperienceCard>
                        <ExperienceCard title={'Sustainable Practices'} text={"Klothink is committed to sustainability, integrating eco-friendly practices into our production process."}>
                            <WbSunnyRoundedIcon />
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