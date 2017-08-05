import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import data2_csv from '../data/data.csv';

// Shift the first item
let obj = data2_csv.shift(),
  formatedData = {labels: [obj.name], datasets: []},
  map = new Map();

delete obj.name;
for (let item in obj) {
  let dataset = {label: item, data: [obj.item]};
  formatedData.datasets.push(dataset);
  map[item] = dataset;
}

data2_csv.forEach( (obj, i, a) => {
  formatedData.labels.push(obj.name);
  delete obj.name;
  for (let item in obj) {
    map[item].data.push(obj[item]);
  }
});

const data2 = {
  type: "bar",
  data: formatedData,
  options: {}
};

const data = {
  type: "bar",
  data: {
    labels: ["Ben", "James", "Marry", "Sam", "Gloria"],
    datasets: [
      {
        label: 'Fun',
        data: [80, 40, 21, 44, 92],
        backgroundColor: "rgba(255,0,0,.2)",
        borderWidth: 1
      },
      {
        label: 'Smart',
        data: [87, 40, 21, 94, 32],
        backgroundColor: "rgba(0,0,255,.2)",
        borderWidth: 1
      },
      {
        label: 'Fun',
        data: [30, 50, 71, 14, 52],
        backgroundColor: "rgba(0,255,0,.2)",
        borderWidth: 3
      },
    ]
  },
  options: {}
};
ReactDOM.render(<Chart {...data2}/>, document.getElementById('react'));
