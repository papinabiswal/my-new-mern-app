import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import OutlinedCard from './components/cards';
import { useState } from 'react';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  return (
    <UserContextProvider>
      <Header onColorChange={handleColorChange} />
      <OutlinedCard selectedColor={selectedColor}/>
      {/* <Navbar /> */}
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register selectedColor={selectedColor}/>}/>
            <Route path="/login" element={<Login selectedColor={selectedColor}/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    </UserContextProvider>
  )
}

export default App
