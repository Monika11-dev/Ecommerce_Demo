import{useState } from "react";
import {useNavigate } from "react-router-dom";

import { Box, TextField, Button} from "@mui/material";


 const LoginForm = () => {

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [loginErrors, setLoginErrors] = useState({});
  
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    
    // console.log(e.target);
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });

  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    setLoginErrors(validate(loginData));

    setIsSubmit(true);

    if(Object.keys(loginErrors).length === 0 && isSubmit){

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find((user)=>user.email === loginData.email && user.password === loginData.password);

    if(user){
        localStorage.setItem("currentUser",JSON.stringify(user));
        alert('Redirecting to the home page.');
        navigate("/Home")
    }
    else {
        alert("Invalid email or password. Please try again");
    }
  }
  };


  const validate = (values) => { 
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

     if(!values.email) { 
      errors.email = "Email is required!";
     } 
     else if(!regexEmail.test(values.email)) { 
      errors.email = "Invalid email format!"; 
    } 
    
    if (!values.password) { 
      errors.password = "Password is required!"; 
    } 
    // else if (!regexPassword.test(values.password)) { 
    //   errors.password = "Password must include at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character."; 
    // }
    return errors;
  }

  return (

<Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          
          px:2,
          pb:2,
         
        }}
>
<TextField

          label="Email"

          name="email"

          type="email"
           
           id="email"

          value={loginData.email}

          onChange={handleChange}

          fullWidth

          margin="normal"
           size="small"
        variant="standard"

          error={!!loginErrors.email}

          helperText = {loginErrors.email}

        />
        {/* <Typography component="paragraph" variant="span" sx={{fontSize:16,color : "red"}} >{loginErrors.email}</Typography> */}
       
<TextField

          label="Password"

          name="password"

          type="password"

          id="Password"

          value={loginData.password}

          onChange={handleChange}

          fullWidth

          margin="normal"
           size="small"
        variant="standard"

          error={!!loginErrors.password}

          helperText = {loginErrors.password}

        />
         {/* <Typography component="paragraph" variant="span" sx={{fontSize:16,color : "red"}}>{loginErrors.password}</Typography> */}
       
<Button

          type="submit"

          variant="contained"

          sx={{ mt: 2 , bgcolor:"orange"}}
>

          Login
</Button>
</Box>


  );

};

export default LoginForm;
