var makeArrayFromString = function(str) {
  var arr = str.split(' ');
  return arr
};

var checkAB = function (A,B) {
  if (A > -2 * Math.pow(10,9) && A < 2 * Math.pow(10,9) && B > -2 * Math.pow(10,9) && B < 2 * Math.pow(10,9)) {
    return (+A + +B);
  } else {
    return "incorrect"
  };
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Enter A and B `, (str) => {
  let arr = makeArrayFromString(str);
  let A = +arr[0];
  let B = +arr[1];
  process.stdout.write(String(checkAB(A,B)));
  readline.close()
})