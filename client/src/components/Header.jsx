import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ButtonAppBar({onColorChange}) {
    const handleColorChange = (event) => {
        const color = event.target.value;
        onColorChange(color);
    };
    const activeLinkStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'white',
        display: 'flex'
      };
  return (
      <AppBar position="static">
        <Toolbar>
          <FormControl fullWidth>
          <InputLabel id="menu" sx={{ color: 'white' }}>Select Color</InputLabel>
          <Select labelId='menu' id="menu-list" label="theme color" sx={{ width: '35%', color: 'white' }} onChange={handleColorChange}>
             <MenuItem value={'white'}>White</MenuItem>
             <MenuItem value={'blue'}>Blue</MenuItem>
             <MenuItem value={'red'}>Red</MenuItem>
             <MenuItem value={'grey'}>Grey</MenuItem>
             <MenuItem value={'yellow'}>Yellow</MenuItem>
          </Select>
          </FormControl>
          <nav>
          <Button component={Link} to="/" style={activeLinkStyle}>
            Home
          </Button>
          <Button component={Link} to="/register" style={activeLinkStyle}>
            Register
          </Button>
          <Button component={Link} to="/login" style={activeLinkStyle}>
            Login
          </Button>
          </nav>
        </Toolbar>
      </AppBar>
  );
}