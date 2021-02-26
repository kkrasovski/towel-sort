// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (matrix) {
    let outputArr = [];
    let subArr;
    for (let i = 0; i < matrix.length; i++) {
      i % 2 != 0 ? subArr = matrix[i].reverse() : subArr = matrix[i];
      for (let i = 0; i < subArr.length; i++) {
        outputArr.push(subArr[i]);
      }
    }
    return outputArr;
  } else {
    return outputArr = [];
  }
}
