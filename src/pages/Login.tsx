import { Button, Container,  Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ILogin } from "../types/pages/ILogin";

import { InputController } from "../components/muiControllers";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Login = () => {


  const schema=yup.object({
    email:yup.string().email('Enter a valid email').required('Email is required'),
    password:yup.string().min(6).max(25).required('Password is required')
  });


  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver:yupResolver(schema)
  });

  const navigate = useNavigate();

  const submitHandler=(data:ILogin)=>{
    alert(JSON.stringify(data))
    navigate('/dashboard/home')
  };


  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      <div className="w-fit h-fit">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2FWallpapers-pexels-photo.jpg&f=1&nofb=1&ipt=fe0858c80f515620fadb634ede7dfcec07eb62bc5045d275821e15ddcba3d3a9&ipo=images" alt="" />
      </div>
      <Container maxWidth="sm" className="w-1/2">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Typography variant="h5" component="div" sx={{ marginBottom: 4 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(submitHandler)}>
            <InputController control={control} label="Email" name="email" />
            <InputController control={control} name="password" label="Password" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ marginTop: 2 }}
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="text-center mt-4">
            <Typography variant="body2" color="text.secondary">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
