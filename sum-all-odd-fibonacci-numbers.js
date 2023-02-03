module.exports = function (num) {
  let fibonachi = [1, 1];
  let count = 0;
  let nextFibo;
  let result = 0;

  if (num === 1) {
    return 1;
  }
  if(num===2){
    return2;
  }

  while (num > count) {
    nextFibo = fibonachi[count] + fibonachi[count + 1];

    if (nextFibo <= num) {
      fibonachi.push(nextFibo);
      if (nextFibo % 2 != 0) {
        result += nextFibo;
      }
    }

    count++;
  }
  return result;
}
