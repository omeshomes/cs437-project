import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

function WeatherGrid(props) {

  const {data} = props;

  const attributeToText = {
    "WDF2": 'Fastest 2 Minute Wind (degrees)',
    "WDF5": 'Fastest 5 Minute Wind (degrees)',
    "WSF2": 'Fastest 2 Minute Wind (m^-1/sec)',
    "WSF5": 'Fastest 5 Minute Wind (m^-1/sec)',
    "average_wind_speed": "Average Wind Speed",
    "has_fog": 'Fog',
    "has_heavy_fog": 'Heavy Fog',
    "has_smoke": 'Smoke',
    "has_thunder": 'Thunder',
    "max_temp": 'Max Temperature',
    "min_temp": 'Min Temperature',
    "peak_gust_time": 'Peak Gust Time',
    "precipitation": 'Precipitation'
  }

  const [columnDefs ] = useState(
    [
      {
        headerName: "Attribute Name", field: "attribute"
      }, {
        headerName: "Yale", field: "Yale"
      }, {
        headerName: "Harvard", field: "Harvard"
      }
    ]
  );

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };


  const fixDataShape = (data) => {
    let rowData = [];
    if(Object.keys(data).length === 0) return rowData;

    const schools = Object.keys(data);
    const attributes = Object.keys(data[schools[0]]);

    for(let i = 0; i < attributes.length; i++) {
      let temp = {};
      temp['attribute'] = attributeToText[attributes[i]]
      for(let j=0; j < schools.length; j++) {
        temp[schools[j]] = data[schools[j]][attributes[i]];
      }
      rowData.push(temp);
    }

    return rowData;
  }


  return (
    <div 
        className="ag-theme-balham weather-grid"
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={fixDataShape(data)}
          modules={AllCommunityModules}
          onGridReady={onGridReady}>
        </AgGridReact>
      </div>
  );
}

export default WeatherGrid;
