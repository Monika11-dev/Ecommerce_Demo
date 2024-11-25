import PropTypes from 'prop-types';
import { Box,Typography } from '@mui/material';

export default function Topheader(props) {
  return (
    <Box component="section" sx={{ p: 1, textAlign: 'center', textTransform: 'uppercase', bgcolor: '#F3F3F3' }}>
      <Typography component="h2" sx={{ fontSize: { xs: 9, sm: 11 }, color: 'grey' }}>
        {props.text}
      </Typography>
    </Box>
  )
}

Topheader
  .propTypes = {
     text: PropTypes.string.isRequired,
};
