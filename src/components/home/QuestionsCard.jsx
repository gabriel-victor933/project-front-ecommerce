import { useState } from "react"
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

// eslint-disable-next-line react/prop-types
export default function QuestionsCard({ question, answer }) {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <Box
            sx={{
                bgcolor: showAnswer ? 'white.99': 'absolute.white',
                width: '100%',
                border: '1px solid #F1F1F3',
                borderRadius: '14px',
                p: { xl: '30px', md: '24px', xs: '20px' },
                display: 'grid',
                gridTemplateColumns: '13fr 1fr',
                gap: { xl: '50px', xs: '40px' },
                position: 'relative',
            }}
        >
            <Typography
                variant="h4"
                color='grey.15'
            >
                {question}
            </Typography>
            <AddIcon
                onClick={() => setShowAnswer(!showAnswer)}
                sx={{
                    fontSize: '28px',
                    cursor: 'pointer',
                    transform: showAnswer ? 'rotate(45deg)' : ''
                }}
            />
            {showAnswer && (<Typography
                variant="h6"
                color='grey.30'
            >
                {answer}
            </Typography>)}
        </Box>

    )
}