import React from 'react';
import { connect } from 'react-redux';
import * as DataManipulation from '../constants/DataManipulation';
var moment = require('moment');

function Orders(props) {
  const filteredData = DataManipulation.filterByDate('w', 2018, props.week, props.orders);
  const tableBody = filteredData.map((order) => {
    return (<tr>
      <td>{order.id}</td>
      <td>{moment(order.date).format('ddd MM/DD/YYYY')}</td>
      <td>{moment(order.date).format('HH:mm')}</td>
      <td>{'$' + order.subtotal.toFixed(2).toString()}</td>
      <td>{printCart(order.cart).map}</td>
      <td><p>{'Lat: ' + order.origination.latitude}</p><p>{'Lon: ' + order.origination.longitude}</p></td>
      <td>{order.customer.id}</td>
    </tr>);
  });
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID#</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Subtotal ($USD)</th>
          <th scope="col">Cart</th>
          <th scope="col">Location</th>
          <th scope="col">CustomerID</th>
        </tr>
      </thead>
      <tbody>
        {
          {tableBody}
        }
      </tbody>
    </table>
  );
}



function printCart(cart) {
  let output = [];
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    output.push(
      <p>{item.id.toString() + ": " + item.name + ' (' + item.roast + ", " + item.origin + ") " + item.qty.toString() + " units x $" + item.price.toFixed(2).toString()}</p>
    );
  }
  return output;
}

const mapStateToProps = state => {
  return {
    orders: state.orders.data,
    orderMeta: state.orders.meta,
    week: 45,
    products: state.products.data
  };
};

export default connect(mapStateToProps)(Orders);