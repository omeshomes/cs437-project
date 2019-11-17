import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

function WeatherGrid() {
  const [columnDefs, setColumnDefs ] = useState(
    [
      {
        headerName: "Make", field: "make"
      }, {
        headerName: "Model", field: "model"
      }, {
        headerName: "Price", field: "price"
      }
    ]
  );

  const [rowData, setRowData ] = useState(
    [{
      make: "Toyota", model: "Celica", price: 35000
    }, {
      make: "Ford", model: "Mondeo", price: 32000
    }, {
      make: "Porsche", model: "Boxter", price: 72000
    }]
  );

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
    };


  return (
    <div 
        className="ag-theme-balham weather-grid"
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          modules={AllCommunityModules}
          onGridReady={onGridReady}>
        </AgGridReact>
      </div>
  );
}

export default WeatherGrid;
