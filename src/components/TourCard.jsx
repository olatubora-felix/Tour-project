import { AccessTime } from '@mui/icons-material';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({tour}) => {
  return <Grid item xs={12} sm={6} md={3}>
      <Link to={`/${tour.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Paper elevation={3} square>
            <img 
                src={tour.image} alt="Card"
                className='img'
            />
            <Box paddingX={1}>
                <Typography variant='subtitle2' component='h2'>
                {tour.name}
                </Typography>
                <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <AccessTime sx={{ width: 12.5 }}/>
                    <Typography
                        variant='body2'
                        component='p'
                        marginLeft={0.5}
                    >
                        {tour.duration} Hour
                    </Typography>
                </Box>
                <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center'
                }}
                marginTop={3}
                >
                    <Rating 
                        name='read-only'
                        value={tour.rating}
                        precision={0.5}
                        size='small'
                    />
                    <Typography variant='body2' component='p' marginLeft={0.5}>
                        {tour.rating}
                    </Typography>
                    <Typography
                        variant='body3'
                        component='p'
                        marginLeft={0.5}
                    >
                    ( {tour.numberOfReviews} Reviews)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h3' marginTop={0}>
                        From C ${tour.numberOfReviews}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    </Link>
  </Grid>
  
};

export default TourCard;
