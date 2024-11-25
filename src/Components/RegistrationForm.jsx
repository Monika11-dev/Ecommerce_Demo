import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const [formValues, setFormValues] = useState({

    username: "",

    email: "",

    password: "",

  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });

  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);


    if (Object.keys(errors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const emailExists = existingUsers.some((user) => user.email === formValues.email);

      if (emailExists) {
        alert("Email already exist");
        return;
      }
      existingUsers.push(formValues);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Signup successful !")
      navigate("/Home");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regexUsername = /^[A-Za-z\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (!regexUsername.test(values.username)) {
      errors.username = "Username can only contain letters and spaces.";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format.";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    else if (!regexPassword.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }
    return errors;
  };

  return (

    <Box
      component="form"

      onSubmit={handleSubmit}

    >
      <TextField

        label="Username"

        name="username"

        type="text"

        value={formValues.username}

        onChange={handleChange}

        fullWidth

        margin="normal"
        size="small"
        variant="standard"

        error={!!formErrors.username}
        helperText={formErrors.username}

      />
      <TextField

        label="Email"

        name="email"

        type="email"

        value={formValues.email}

        onChange={handleChange}

        fullWidth

        margin="normal"
        size="small"
        variant="standard"


        error={!!formErrors.email}
        helperText={formErrors.email}

      />
      <TextField

        label="Password"

        name="password"

        type="password"

        value={formValues.password}

        onChange={handleChange}

        fullWidth

        margin="normal"
        size="small"
        variant="standard"


        error={!!formErrors.password}
        helperText={formErrors.password}

      />
      <Button

        type="submit"

        variant="contained"

        color="primary"

        sx={{ mt: 2, bgcolor: "orange" }}
      >
        Register
      </Button>
    </Box>


  );
}


export default RegistrationForm; 