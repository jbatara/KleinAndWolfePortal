import React from 'react';
import { connect } from 'react-redux';
import Charts from './Charts';

function LiveDataView(props) {
  return (
    <div className='flex-grid'>
      <Charts type='product_rev_week' data={props.orders} weekNumber={45} products={props.products}/>
      <Charts type='product_qty_week' data={props.orders} weekNumber={45} products={props.products} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    products: state.products
  }
}

export default connect(mapStateToProps)(LiveDataView);