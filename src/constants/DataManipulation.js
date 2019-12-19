var moment = require('moment');

//https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

//takes in data and if you want to filter by week, month, or quarter. Number represents either the week number, month number, or quarter number that is being searched for
export function filterByDate(type, year, number, data) {
  let output = [];
  if (type === 'w') {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const newDate = moment(obj.date);
      if (newDate.isoWeek() === number && newDate.year() === year) {
        output.push(obj);
      }
    }
  } else if (type === 'm') {
    data.forEach(obj => {
      const newDate = moment(obj.date);
      //months are zero indexed, but func will take normal month numbers starting at 1
      if (newDate.month() === (number - 1) && newDate.year() === year) {
        output.push(obj);
      }
    });
  } else if (type === 'q') {
    const quarters = {
      1: [0, 1, 2, ],
      2: [3, 4, 5],
      3: [6, 7, 8],
      4: [9, 10, 11]
    };
    const months = quarters[number];

    data.forEach(obj => {
      const newDate = moment(obj.date);
      if (months.contains(newDate.month()) && newDate.year() === year) {
        output.push(obj);
      }
    });
  } else {
    throw new Error("Invalid type");
  }
  return output;
}

//takes in array of objects, returns array of objects
function filterByLocation(objArray, type, originLat, originLong, radius) {
  let output = [];
  objArray.forEach(obj => {
    if (type === 'traffic' || type === 'customer') {
      const objLat = obj.location.latitude;
      const objLon = obj.location.longitude;
      const delta = getDistanceFromLatLonInKm(originLat, originLong, objLat, objLon);

      if (delta <= radius) {
        output.push(obj);
      }
    } else if (type === 'order') {
      const objLat = obj.origination.latitude;
      const objLon = obj.origination.longitude;
      const delta = getDistanceFromLatLonInKm(originLat, originLong, objLat, objLon);

      if (delta <= radius) {
        output.push(obj);
      }
    }
  });
  return output;
}

function getDaysOfWeek(weekNumber, year) {
  const startMoment = moment()
  startMoment.year(year);
  startMoment.day("Monday");
  startMoment.week(weekNumber);
  let week = [];
  for (let i = 0; i < 7; i++) {
    let newMoment = startMoment.clone().add(i, 'days');
    week.push(newMoment.format('dddd MM/DD/YYYY').toString());
  }
  return week;
}

//takes in array of objects, and returns data object for a top 5 table for a week
export function topFiveProductsByWeek_Revenue(data, weekNumber, indexString, availableProducts) {
  // let keys = getDaysOfWeek(weekNumber,2018);
  let keys = [];

  for (let i = 0; i < availableProducts.length; i++) {
    keys.push(availableProducts[i].name);
  }

  const filteredData = filterByDate('w', 2018, weekNumber, data);

  let productRevenue = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < filteredData.length; i++) {
    const order = filteredData[i];
    const cart = order.cart;
    for (let j = 0; j < cart.length; j++) {
      let item = cart[j];
      productRevenue[j] += (item.qty * item.price);
    }
  }

  let chartData = [];
  for(let i = 0; i<productRevenue.length;i++){
    const dataPoint = {};
    dataPoint[indexString] = availableProducts[i].name;
    dataPoint[availableProducts[i].name] = productRevenue[i];
    console.log(dataPoint);    chartData.push(dataPoint);
  }

  let output = {
    keys: keys,
    data: chartData,
    axisBottomLegend: 'Product',
    axisLeftLegend: 'Revenue ($)',
    indexBy: indexString,
  }
  return output;
}

export function topFiveProductsByWeek_Qty(data, weekNumber, indexString, availableProducts) {
  // let keys = getDaysOfWeek(weekNumber, 2018);
  let keys = [];
  availableProducts.forEach(product => keys.push(product.name));

  const filteredData = filterByDate('w', 2018, weekNumber, data);

  let productQty = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < filteredData.length; i++) {
    const order = filteredData[i];
    const cart = order.cart;
    for (let j = 0; j < cart.length; j++) {
      let item = cart[j];
      productQty[j] += item.qty;
    }
  }

  let chartData = [];
  productQty.forEach((product, index) => {
    const dataPoint = {};
    dataPoint[indexString] = availableProducts[index].name;
    dataPoint[availableProducts[index].name] = productQty[index];
    chartData.push(dataPoint);
  });

  let output = {
    keys: keys,
    data: chartData,
    axisBottomLegend: 'Products',
    axisLeftLegend: 'Units',
    indexBy: indexString
  }

  return output;
}
