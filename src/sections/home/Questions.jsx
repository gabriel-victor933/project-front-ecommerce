import { Grid2, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import QuestionsCard from "../../components/home/QuestionsCard";

//TODO: remover essas questions depois
const questions = [
    {
        question: 'Can I modify my order after placing it?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'How do I initiate a return?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'How can I unsubscribe from the newsletter?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'Do you offer exchanges for products?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'How can I place an order on Klothink?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'How can I track my order?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'What is your shipping policy?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'Are there any additional fees for returns?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'How do I create an account on Klothink?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'Can I change my account information?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
    {
        question: 'Are my personal details secure on Klothink?',
        answer: 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
    },
]

export default function Questions(){

    const [category, setCategory] = useState('ALL')


    return (
        <Grid2
            mb={{ md: '150px', xs: '75px' }}
            display='flex'
            flexDirection='column'
            gap={{xs: '40px', md: '60px', xl: '80px'}}
        >
            <Grid2
                display='flex'
                flexDirection={'column'}
                gap={{xl: '36px', md: '20px', xs: '16px'}}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column-reverse',md: 'row'},
                    }}
                >
                    <Typography variant='h1'>
                        QUESTIONS? WE HAVE ANSWERS
                    </Typography>
                    <Typography variant='h5' color='grey.60'>
                        FAQ 
                    </Typography>
                </Box>
                <Typography variant='h6' color='grey.40' sx={{width: {md: '85%', xs: '100%'}}}>
                    Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, 
                    ensuring you have the information you need for a seamless shopping experience.
                </Typography>
            </Grid2>
            <Grid2
                sx={{
                    borderTop: '1px solid #F1F1F3',
                    borderBottom: '1px solid #F1F1F3',
                    py: {xl: '40px', md: '30px', xs: '20px'}
                }}  
            >
                {['ALL', 'ORDERING', 'SHIPPING', 'CUSTOMER SUPPORT'].map((item, i) => (
                        <Button
                            key={i}
                            variant="text"
                            color={category === item ? 'secondary' : 'primary'}
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </Button>
                    ))}
            </Grid2>
            <Grid2
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xl: '1fr 1fr 1fr', md: '1fr 1fr', xs: '1fr'},
                    rowGap: {xl: '20px', md: '16px', xs: '16px'},
                    columnGap: {xl: '30px', md: '20px'},
                    justifyContent: 'start',
                    alignItems: 'start'
                }}
            >
                <Grid2
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: {xl: '20px', md: '16px', xs: '16px'},
                    }}
                >
                    {questions.slice(0,4).map((question, i) => <QuestionsCard key={i} {...question}/>)}
                </Grid2>    
                <Grid2
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: {xl: '20px', md: '16px', xs: '16px'},
                    }}
                >
                    {questions.slice(0,4).map((question, i) => <QuestionsCard key={i} {...question}/>)}
                </Grid2>  
                <Grid2
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: {xl: '20px', md: '16px', xs: '16px'},
                    }}
                >
                    {questions.slice(0,4).map((question, i) => <QuestionsCard key={i} {...question}/>)}
                </Grid2>  
            </Grid2>
        </Grid2>
    )
}