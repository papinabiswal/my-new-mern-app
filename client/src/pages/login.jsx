import {useState} from 'react';
import axios from 'axios'; 
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const login = ({selectedColor}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const loginUser = async (e)=>{
    e.preventDefault();
    const {email, password} = data;

    try{
      const response = await axios.post('/login', {
        email,
        password,
        color: selectedColor
      },{
        withCredentials: true, // This is important to include cookies.
      });
      
      if (response.data && response.data.error) {
        toast.error(response.data.error);
      } else {
        // Data may not be present in the response if there was no error.
        // Handle success case here.
        setData({});
        navigate('/dashboard');
      }
    } catch(e){
        console.log("Error:", e);
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default login