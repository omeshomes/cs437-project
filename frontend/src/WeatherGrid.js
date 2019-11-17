import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

function WeatherGrid(props) {

  const {rowData} = props;


  const [columnDefs ] = useState(
    [
      {
        headerName: "Attribute Name", field: "attribute"
      }, {
        headerName: "Yale", field: "yale"
      }, {
        headerName: "Harvard", field: "harvard"
      }
    ]
  );

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };


  const fixDataShape = (data) => {
    if(!data) return [];

    const schools = Object.keys(data)

    for(let i = 0; i < Object.keys(data[schools[0]]).length; i++) {

    }
  }


  return (
    <div 
        className="ag-theme-balham weather-grid"
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={fixDataShape(rowData)}
          modules={AllCommunityModules}
          onGridReady={onGridReady}>
        </AgGridReact>
      </div>
  );
}

export default WeatherGrid;
