import React from 'react';
import { connect } from 'react-redux';
import Charts from './Charts';

function LiveDataView(props) {

  const height = 100;
  var style = { height: 500 };

  let dataArray3 = [
    {
      "food": "hot dog",
      "hot dog": 154,
      "hot dogColor": "hsl(43, 70%, 50%)"
    },
    {
      "food": "burger",
      "burger": 120,
      "burgerColor": "hsl(279, 70%, 50%)"
    },
    {
      "food": "sandwich",
      "sandwich": 129,
      "sandwichColor": "hsl(215, 70%, 50%)"
    },
    {
      "food": "kebab",
      "kebab": 196,
      "kebabColor": "hsl(79, 70%, 50%)"

    },
    {
      "food": "fries",
      "fries": 127,
      "friesColor": "hsl(156, 70%, 50%)"
    },
    {
      "food": "donut",
      "donut": 188,
      "donutColor": "hsl(138, 70%, 50%)"
    }
  ];

  let data4 = {
    keys:
      ['Harar Highlands',
        'Kopi Tubruk',
        'Cinnamon Roast',
        'Morning Cup',
        'Nairobi Explorer',
        'Original Espresso',
      ],
    data:
      [{ product: 'Harar Highlands', 'Harar Highlands': 136, 'Harar HighlandsColor': 'hsl(52, 70%, 50%)' },
        { product: 'Kopi Tubruk', 'Kopi Tubruk': 89, 'Kopi TubrukColor': 'hsl(52, 70 %, 50 %)' },
      { product: 'Cinnamon Roast', 'Cinnamon Roast': 88 },
      { product: 'Morning Cup', 'Morning Cup': 56 },
      { product: 'Nairobi Explorer', 'Nairobi Explorer': 19 },
      { product: 'Original Espresso', 'Original Espresso': 0 }],
    axisBottomLegend: 'Days',
    axisLeftLegend: 'Quantity',
    indexBy: 'product'
  }

  return (
    <div className='flex-grid'>
      <Charts type='product_rev_week' data={props.order} weekNumber={45} products={props.products}/>
      <Charts type='product_qty_week' data={props.order} weekNumber={45} products={props.products} />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    order: state.order,
    products: state.products
  }
}


export default connect(mapStateToProps)(LiveDataView);