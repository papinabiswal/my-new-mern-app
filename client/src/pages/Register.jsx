import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = ({selectedColor}) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const registerUser = async(e)=>{
    e.preventDefault();
    const {name, email, password} = data;
    try {
       const {data} = await axios.post('/register',{
        name, email, password, color: selectedColor
       })
       if(data.error){
        toast.error(data.error);
       } else{
        setData({});
        toast.success('Login Successfull. Welcome!');
        navigate('/login')
       }
    } catch(e){
       console.log(e);
    }
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter your name...' value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='text'>Submit</button>
      </form>
    </div>
  )
}

export default Register