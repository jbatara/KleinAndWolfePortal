import React from 'react';
import * as DataManipulation from './../constants/DataManipulation';

function Tables(props){
  const filteredData = DataManipulation.filterByDate('w',2018,props.week,props.data);
  return(
    
  );
}

export default Tables;