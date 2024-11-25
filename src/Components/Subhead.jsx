import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";


export default function Subhead(props) {
  return (
    <Box component="section" sx={{ my:5, p: 1, textAlign: 'center', textTransform: 'capitalize'}}>
      <Typography component="h2" sx={{ fontSize : 28, color: '#555555',fontWeight:100}}> 
        {props.subheading}
      </Typography>
    </Box>
  )
}

Subhead.propTypes={
    subheading : PropTypes.string.isRequired,
}