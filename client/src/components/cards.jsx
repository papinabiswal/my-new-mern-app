import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h4>Theme Color</h4>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ selectedColor }) {
    const cardStyle = {
        backgroundColor: selectedColor, // Apply the selected color as the background
        height: 200
      };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={cardStyle}>{card}</Card>
    </Box>
  );
}