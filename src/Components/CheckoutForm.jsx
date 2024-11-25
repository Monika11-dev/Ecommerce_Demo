import Grid from "@mui/material/Grid2";
import { Box, TextField, Select, Button } from "@mui/material";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const countryStateMap = {
  USA: ["California", "Texas", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  India: ["Delhi", "Maharashtra", "Karnataka"],
};

export default function CheckoutForm() {

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    streetaddress: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
    mobile: "",
    email: "",
  });

  const [states, setStates] = useState([]);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  // };

  // const handleStateChange = (event) => {
  //   setState(event.target.value);
  // };

  const validateForm = () => {
    let newErrors = {};

    const regexUsername = /^[A-Za-z\s]+$/;

    if (!formValues.firstname) newErrors.firstname = "First Name is required.";

    else if (!regexUsername.test(formValues.firstname))
      newErrors.firstname = "Firstname can only contain letters and spaces.";

    if (!formValues.lastname) newErrors.lastname = "Last Name is required.";

    else if (!regexUsername.test(formValues.lastname))
      newErrors.lastname = "Lastname can only contain letters and spaces.";

    if (!formValues.companyname)
      newErrors.companyname = "Company Name is required.";

    if (!formValues.streetaddress)
      newErrors.streetaddress = "Street Address is required.";

    if (!formValues.city) newErrors.city = "City is required.";

    else if (!regexUsername.test(formValues.city))
      newErrors.city = "City name can only contain letters and spaces.";

    if (!formValues.country) newErrors.country = "Country is required.";

    if (!formValues.state) newErrors.state = "State is required.";

    if (!formValues.zipcode)
      newErrors.zipcode = "Zipcode is required.";

    else if (!/^\d{6}$/.test(formValues.zipcode))
      newErrors.zipcode = "Zipcode must be 6 digits.";

    if (!formValues.mobile)
      newErrors.mobile = "Phone is required.";

    else if (!/^\d{10}$/.test(formValues.mobile))
      newErrors.mobile = "Phone must be a 10-digit number.";

    if (!formValues.email) newErrors.email = "Email is required.";

    else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formValues.email))
      newErrors.email = "Invalid email format.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setFormValues((prev) => ({ ...prev, country: value, state: "" }));
      setStates(countryStateMap[value] || []);
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("checkoutFormData", JSON.stringify(formValues));
      setDisabled(true);
      alert("User details saved successfully ! ")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <TextField label="First Name" size="small" name="firstname" type="text" variant="standard" fullWidth margin="normal" value={formValues.firstname}
              onChange={handleChange} error={!!errors.firstname}
              helperText={errors.firstname} disabled={disabled}
            />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <TextField label="Last Name" size="small" name="lastname" type="text" variant="standard" fullWidth margin="normal" value={formValues.lastname}
              onChange={handleChange} error={!!errors.lastname}
              helperText={errors.lastname} disabled={disabled} />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            <TextField label="Company Name" size="small" name="companyname" type="text" variant="standard" value={formValues.companyname}
              onChange={handleChange}
              fullWidth
              margin="normal" error={!!errors.companyname}
              helperText={errors.companyname} disabled={disabled}

            />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            <FormControl fullWidth variant="standard" error={!!errors.country} sx={{ mt: 2, mb: 1 }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country"
                value={formValues.country}
                onChange={handleChange}

                label="Country"

                margin="normal"
                disabled={disabled}
              > <MenuItem value="None">
                  Select country
                </MenuItem>
                {Object.keys(countryStateMap).map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
              {errors.country && (
                <Box sx={{ color: "red", fontSize: "0.75rem", mt: 0.5 }}>
                  {errors.country}
                </Box>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            <TextField label="Street Address" size="small" name="streetaddress" type="text" variant="standard" value={formValues.streetaddress}
              onChange={handleChange}
              fullWidth error={!!errors.streetaddress}
              helperText={errors.streetaddress}
              margin="normal" disabled={disabled} />


          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            <TextField label="City" size="small" name="city" type="text" variant="standard" value={formValues.city}
              onChange={handleChange}
              fullWidth
              margin="normal" error={!!errors.city}
              helperText={errors.city} disabled={disabled} />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <FormControl fullWidth variant="standard" error={!!errors.state} sx={{ mt: 2, mb: 1 }}>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="state"
                value={formValues.state}
                onChange={handleChange}

                disabled={disabled}

                label="State"

                margin="normal"


              > <MenuItem value="">Select State</MenuItem>
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
              {errors.state && (
                <Box sx={{ color: "red", fontSize: "0.75rem", mt: 0.5 }}>
                  {errors.state}
                </Box>
              )}
            </FormControl>

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <TextField label="Zipcode" size="small" name="zipcode" type="text" variant="standard" value={formValues.zipcode}
              onChange={handleChange}
              fullWidth margin="normal" error={!!errors.zipcode}
              helperText={errors.zipcode} disabled={disabled} />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <TextField label="Phone" size="small" name="mobile" type="text" variant="standard" value={formValues.mobile}
              onChange={handleChange}
              fullWidth error={!!errors.mobile}
              helperText={errors.mobile} margin="normal" disabled={disabled} />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, }}>
            <TextField label="Email" size="small" name="email" type="email" variant="standard" value={formValues.email}
              onChange={handleChange} error={!!errors.email}
              helperText={errors.email} fullWidth margin="normal" disabled={disabled} />

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" sx={{ boxShadow: 0, bgcolor: "orange" }} disabled={disabled} >
              Confirm & Save details
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
