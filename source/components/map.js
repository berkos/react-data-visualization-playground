import React from "react";

export default class Map extends React.Component {
  onClick(e) {
    let img = e.target;
    let point = {x: e.offsetX, y: e.offsetY};

    if (!point.x) {
      point = {
        x: e.pageX - e.target.offsetLeft,
        y: e.pageY - e.target.offsetTop
      };
    }

    console.log(point);
  }

  render() {
    return <img onClick={this.onClick}
      src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Mercator_projection_SW.jpg"/>
  }
}
