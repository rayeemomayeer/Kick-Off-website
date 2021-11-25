import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Products from '../Products/Products';
import FirmGround from './FirmGround';
import ArtificialGrass from './ArtificialGrass';
import Indoor from './Indoor';
import Turf from './Turf';

import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}
const ExploreProducts = () => {
  let { path, url } = useRouteMatch();
  const [value, setValue] = React.useState([50, 600]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto ">
        <div className="lg:flex lg:-mx-2">
          <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 mt-28">
            <h3 className="text-3xl pl-2 text-gray-700">Categories</h3>

            <div className="pl-2 lg:space-y-3">
              <Link to={`${url}/all`} className="text-xl text-gray-600 block hover:underline hover:text-green-800 focus:text-green-800">All Boots</Link>
              <Link to={`${url}/firm_ground`} className="text-xl text-gray-600 hover:underline hover:text-green-800 focus:text-green-800 block ">Firm Ground</Link>
              <Link to={`${url}/artificial_grass`} className="text-xl text-gray-600 hover:underline hover:text-green-800 focus:text-green-800 block ">Artificial Grass</Link>
              <Link to={`${url}/turf`} className="text-xl text-gray-600 hover:underline hover:text-green-800 focus:text-green-800 block ">Turf</Link>
              <Link to={`${url}/indoor`} className="text-xl text-gray-600 hover:underline hover:text-green-800 focus:text-green-800 block ">Indoor</Link>
            </div>
            <Box sx={{ width: 200 }}>
              <span className="text-xl text-gray-600 block ml-2">Price</span>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                sx={{ml: 2}}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={50}
                max={600}
              />
            </Box>
            
          </div>
          <div className="lg:mt-0 lg:w-4/5 ">
            <Switch>
              <Route exact path={path}>
                <Products></Products>
              </Route>
              <Route path={`${path}/all`}>
                <Products></Products>
              </Route>
              <Route path={`${path}/firm_ground`}>
                <FirmGround />
              </Route>
              <Route path={`${path}/artificial_grass`}>
                <ArtificialGrass />
              </Route>
              <Route path={`${path}/turf`}>
                <Turf />
              </Route>
              <Route path={`${path}/indoor`}>
                <Indoor></Indoor>
              </Route>
            </Switch>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;