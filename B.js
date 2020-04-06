var getArgsFromFile = function () {
  const fs = require('fs');
  let str = '';
  try {
      str = fs.readFileSync('input.txt', 'utf8')
  } catch (err) {
      console.error(err)
  };
  return str
};

var makeArrayFromString = function(str) {
  var arr = str.split(' ');
  return arr
};

var arr = makeArrayFromString(getArgsFromFile());
var A = +arr[0];
var B = +arr[1];


if (A > -2 * Math.pow(10,9) && A < 2 * Math.pow(10,9) && B > -2 * Math.pow(10,9) && B < 2 * Math.pow(10,9)) {
  var result = (+A + +B);
} else {
  var result = "incorrect"
}

const fs = require('fs');
fs.writeFileSync("output.txt", result,  "ascii")
