import React from "react";
import { InputController } from "../components/muiControllers";
import { useForm } from "react-hook-form";
import { ISignUpPage } from "../types/pages/ISignUp";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button,Paper } from "@mui/material";

const SignUp = () => {
  const schema = yup.object({
    fistName: yup.string().required("Fist Name is a Required Field"),
    lastName: yup.string().required("Last Name is a Required Field"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email Should be Valid"
      ).required('Email is a Required Field'),
    password: yup.string().min(6).max(30).required('*Password is a Required Field'),
  });

  const { control, handleSubmit } = useForm<ISignUpPage>({
    defaultValues: {
      fistName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const submitHandler=(data:ISignUpPage)=>{
    console.log(data)
  };

  return (
    <div className="flex bg-slate-500">
      <div className="xs:hidden sm:hidden md:w-1/2 lg:w-1/2 xl:w-1/2 ">
        <img
          className="  object-cover object-center"
          src="https://images.unsplash.com/photo-1619161208416-b7d5f04c5b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80"
          alt="Food Images"
        />
      </div>
      <Paper className="flex justify-center items-center  sm:w-full sm:px-2 sm:py-4 md:w-1/2 ">
          <Paper elevation={4} className="w-11/12 h-11/12">
        <form onSubmit={handleSubmit(submitHandler)} className="p-8 flex flex-col items-center justify-center ">
          <InputController  
            name="firstName"
            label="First Name"
            control={control}
          />
          <InputController
            name="lastName"
            label="Last Name"
            control={control}
          />
          <InputController name="email" label="Email" control={control} />
          <InputController name="password" label="Password" control={control} />
          <InputController
            name="password"
            label="Re-enter Password"
            control={control}
          />

          <Button
          type="submit"
          variant="contained"
          >
            Sign Up
          </Button>
        </form>
            </Paper>
      </Paper>
    </div>
  );
};

export default SignUp;
