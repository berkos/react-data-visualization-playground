import RandomColor from 'just.randomcolor';

export function a2c (a) {
// Shift the first item
  let obj = a.shift(),
    formatedData = {labels: [obj.name], datasets: []},
    map = new Map();

  delete obj.name;
  for (let item in obj) {
    let dataset = {label: item, data: [obj[item]]};
    let color = new RandomColor().toRGBA();

    dataset.borderColor = color.toCSS();
    color.value.a = 0.5;

    dataset.borderWidth = 2;
    dataset.backgroundColor = color.toCSS();

    formatedData.datasets.push(dataset);
    map[item] = dataset;
  }

  a.forEach((obj, i, a) => {
    formatedData.labels.push(obj.name);
    delete obj.name;
    for (let item in obj) {
      map[item].data.push(obj[item]);
    }
  });

  return formatedData;
}
