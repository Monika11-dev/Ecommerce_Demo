import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab'
import { TabPanel } from '@mui/lab';

export default function Tabinfo(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: 'body1', pb: 5 }}  >
      <TabContext value={value} >
        <Box >
            <TabList onChange={handleChange} variant='fullWidth' aria-label="lab API tabs example" indicatorColor="primary" textColor="primary" >
              
                <Tab label="Description" value="1" sx={{ px: 2 ,fontSize:{xs:'12px',sm:'0.875rem'}}} />
              
              
                <Tab label="Additional Info" value="2" sx={{ px: 2,fontSize:{xs:'12px',sm:'0.875rem'}}} />
              
            
                <Tab label="Review" value="3" sx={{ px: 2,fontSize:{xs:'12px',sm:'0.875rem'}}} />
            
            </TabList>       
        </Box>
        <TabPanel value="1">{props.textOne}</TabPanel>
        <TabPanel value="2">{props.textTwo}</TabPanel>
        <TabPanel value="3">{props.textThree}</TabPanel>
      </TabContext>
    </Box>
  );
}

Tabinfo
    .propTypes = {
    textOne
        :
        PropTypes
            .string.isRequired,
    textTwo
        :
        PropTypes
            .string.isRequired,
    textThree
        :
        PropTypes
            .string.isRequired,
};
