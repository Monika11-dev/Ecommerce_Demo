import { Paper } from "@mui/material"
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Prodimg(props) {
  return (
    <Paper>
            <Card sx={{ maxWidth: 500, boxShadow: 0, borderRadius: '1px' ,margin:'auto'}}>
      <CardMedia
        sx={{ height: 500 }}
        image={props.item}
      />
     
    </Card>
           
</Paper>
  )
}

Prodimg
    .propTypes = {
    item
        :
        PropTypes
            .string.isRequired,
  
};


