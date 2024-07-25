import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Allflateuploaded from './alluseruplodedflate';
import Allflateuseruploaded from './allflatesuseruploded';

const components = [
  <Allflateuploaded />, 
  <Allflateuseruploaded />
 
];

export default function AllrentalFlate() {
  const [value, setValue] = React.useState(0);

 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto", borderBlockEndColor:'black',borderBlockStartColor:'black',marginRight:'70%' }}>
      <BottomNavigation
      
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction  label="All Flates" icon={<ApartmentIcon/>} />
        <BottomNavigationAction  label="Flates Uploaded You" icon={<AddBusinessIcon/>} />
       
      </BottomNavigation>
      {components[value]}
    </Box>
  );
}
