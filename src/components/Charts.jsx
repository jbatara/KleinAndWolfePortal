import React from 'react';
import Chart from 'chart.js';
import { ResponsiveCalendarCanvas } from '@nivo/calendar'

//this is an example of nivo calendar
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendarCanvas = ({ data /* see data tab */ }) => (
  <ResponsiveCalendarCanvas
    data={data}
    from="2013-03-01"
    to="2019-07-12"
    emptyColor="#aa7942"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{ top: 40, right: 40, bottom: 50, left: 40 }}
    direction="vertical"
    monthBorderColor="#ffffff"
    dayBorderWidth={0}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left'
      }
    ]}
  />
)

function Charts(){

  return (
    <React.Fragment>
      <canvas id="myChart" width="400" height="400"></canvas>
    </React.Fragment>
    
  );
}

//this is an example of chart.js
function barChart(canvasId){
  var ctx = document.getElementById(canvasId);
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

export default Charts;