import React from 'react'
import * as Yup from "yup";

export let signUpSchema =Yup.object({
    Name:Yup.string().min(2,"This is to small").max(30).required("Please Enter Your Name"),
    Email:Yup.string().email().required("Please Enter a correct email"),
    Password:Yup.string().min(6).max(25).required("Please Enter Your Password"),
    confirm_Password:Yup.string()
    .required()
    .oneOf([Yup.ref("Password"),null],"Password must match")
})