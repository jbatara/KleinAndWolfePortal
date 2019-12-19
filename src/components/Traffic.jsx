import React from 'react';
import {connect} from 'react-redux';
import { ResponsiveGeoMapCanvas } from '@nivo/geo';
import {filterByDate, } from '../constants/DataManipulation';

function Traffic(props){
  var style = {height: '500px'}
  return (
    <div className='container' style={style}>
      {MyResponsiveGeoMap(null)}
    </div>
  );
}

const MyResponsiveGeoMap = (data) => (
  <ResponsiveGeoMapCanvas
    features={[{
      "location": {
        "latitude": 41.26426747188511,
        "longitude": 80.65774637884769}}]}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    fillColor="#eeeeee"
    borderWidth={0.5}
    borderColor="#333333"
    enableGraticule={true}
    graticuleLineColor="#666666"
  />
)
const mapPropsToState = state =>{
  return{
    traffic: state.traffic.data
  };
}

export default connect(mapPropsToState)(Traffic);