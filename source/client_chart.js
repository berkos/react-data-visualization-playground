import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';

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
  options: {

  }
};
ReactDOM.render(<Chart {...data}/>, document.getElementById('react'));
