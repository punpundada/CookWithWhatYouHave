import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate=useNavigate();

  const handleLogin=()=>{
  sessionStorage.setItem('userId','1')
    navigate('/dashboard/home')
    }
  const handleLogout=()=>{
    sessionStorage.removeItem('userId');
    navigate('/')
  }
  return (
    <div className='flex gap-4'>
      Login Page
      <Button variant='contained' onClick={handleLogin}>
          Login
      </Button>
      <Button variant='contained' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Login
