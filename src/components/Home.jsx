import React from 'react';
import {connect} from 'react-redux';

function Home(props){
  return (
    <div className='container'>
      <h1>Welcome, {props.user.userName}.</h1>
      <table className='table table-hover'>
        <tr>
          <td><h3>Last Product Fetch: </h3></td>
          <td><h3>{props.productMeta}</h3></td>
        </tr>
        <tr>
          <td><h3>Last Order Fetch: </h3></td>
          <td><h3>{props.orderMeta}</h3></td>
        </tr>
        <tr>
          <td><h3>Last Traffic Fetch: </h3></td>
          <td><h3>{props.trafficMeta}</h3></td>
        </tr>
      </table>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    productMeta: state.products.meta,
    orderMeta: state.orders.meta,
    trafficMeta: state.traffic.meta,
    user: state.user
  }
};

export default connect(mapStateToProps)(Home);