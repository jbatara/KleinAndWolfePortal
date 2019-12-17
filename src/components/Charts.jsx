import React from 'react';
import Chart from 'chart.js';
import {ResponsiveBarCanvas} from '@nivo/bar';

//this is an example of chart.js
function barChart(chartRef) {
  var ctx = chartRef.current;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return myChart;
}

class Charts extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = { type: props.type, data: props.data };
  }
  componentDidMount() {
    if (this.state.type === 'bar') {
      barChart(this.chartRef);
    }
  }
  
  render() {
    var style = { height: 500 };
    return (
      <div style={style}>
        <canvas ref={this.chartRef} width={'400 px'} height={'400 px'} />
        {MyResponsiveBarCanvas(this.state.data)}
      </div>

    );
  }
}
const MyResponsiveBarCanvas = (data) => (
  <ResponsiveBarCanvas
    data={data}
    keys={[
      'hot dog',
      'burger',
      'sandwich',
      'kebab',
      'fries',
      'donut',
      'junk',
      'sushi',
      'ramen',
      'curry',
      'udon',
      'bagel',
      'yakitori',
      'takoyaki',
      'tacos',
      'miso soup',
      'tortilla',
      'tapas',
      'chipirones',
      'gazpacho',
      'soba',
      'bavette',
      'steak',
      'pizza',
      'spaghetti',
      'ravioli',
      'salad',
      'pad thai',
      'bun',
      'waffle',
      'crepe',
      'churros',
      'paella',
      'empanadas',
      'bruschetta',
      'onion soup',
      'cassoulet',
      'bouillabaisse',
      'unagi',
      'tempura',
      'tonkatsu',
      'shabu-shabu',
      'twinkies',
      'jerky',
      'fajitas',
      'jambalaya',
      'meatloaf',
      'mac n cheese',
      'baked beans',
      'popcorn',
      'buffalo wings',
      'BBQ ribs',
      'apple pie',
      'nachos',
      'risotto',
      'tiramisu'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    pixelRatio={2}
    padding={0.15}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="stacked"
    layout="horizontal"
    reverse={false}
    colors={{ scheme: 'red_blue' }}
    colorBy="id"
    borderWidth={0}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 36 }}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 36
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    enableGridX={true}
    enableGridY={false}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    isInteractive={true}
  />
)

export default Charts;