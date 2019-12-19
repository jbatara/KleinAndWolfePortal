import React from 'react';
import { ResponsiveBarCanvas } from '@nivo/bar';
import * as DataManipulation from './../constants/DataManipulation';

function Charts(props) {

  var style = { height: '50vh', width: '50vw', borderWidth: '1px', borderColor:'grey'};
  return (
    <div className='col' style={style}>
      <h2></h2>
      {chartTitle(props.type, props.weekNumber)}
      {chartByType(props.type, props.data.orders, props.weekNumber, props.products.products)}
    </div>

  );
}
const MyResponsiveBarCanvas = (data) => (
  <ResponsiveBarCanvas
    data={data.data}
    keys={data.keys}
    indexBy={data.indexBy}
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    pixelRatio={2}
    padding={0.15}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="stacked"
    layout="vertical"
    reverse={false}
    colors={{ scheme: 'green_blue' }}
    colorBy="id"
    borderWidth={0}
    borderColor={{ from: '#808080' }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.axisLeftLegend,
      legendPosition: 'middle',
      legendOffset: -40
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 0,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 30,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    tooltip={data.tooltip}
    enableGridX={false}
    enableGridY={false}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    isInteractive={true}
  />
);

function chartTitle(type, weekNumber) {
  switch (type) {
    case 'product_rev_week':
      return (<h4><em>Top 5 Products by Revenue: Week {weekNumber}</em></h4>);
    case 'product_qty_week':
      return (<h4><em>Top 5 Products by Units Sold: Week {weekNumber}</em></h4>);
    default:
      return (<h3>chartTitle Error</h3>);
  }
}
function chartByType(type, data, weekNumber, productsArray) {
  switch (type) {
    case 'product_rev_week':
      return MyResponsiveBarCanvas(
        DataManipulation.topFiveProductsByWeek_Revenue(data, weekNumber, 'product', productsArray));
    case 'product_qty_week':
      return MyResponsiveBarCanvas(
        DataManipulation.topFiveProductsByWeek_Qty(data, weekNumber, 'product', productsArray));
    default:
      return <p>That is an invalid chart type.</p>;
  }
}

export default Charts;