
exports.min = function min (array) {
  
  if(array == undefined || array === null || array == 0) {
    return 0;
  } 

  let minValue = 0;

  for (let i = 0; i < array.length; i++) {
    if(minValue > array[i])
    minValue = array[i];
  }

  return minValue;
}

exports.max = function max (array) {

  if(array == undefined || array === null || array == 0) {
    return 0;
  } 

  let maxValue = 0;

  for (let i = 0; i < array.length; i++) {
    if(maxValue < array[i])
    maxValue = array[i];
  }

  return maxValue;
}

exports.avg = function avg (array) {
  
    if(array == undefined || array === null || array == 0) {
    return 0;
  }

    let avgValue =0;

    for (let i = 0; i < array.length; i++) {
    avgValue += array[i];
  }
  return avgValue / array.length;
}
