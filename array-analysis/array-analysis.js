function average(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

function analyze(array) {
  let avg = average(array);
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;

  return { avg, min, max, length };
}

export { analyze }
