// name : test1.js
// task : fixed array versus array.push in JavaScript
// git  : https://github.com/pffy/arr
// lic  : https://unlicense.org/

let a = clock1();
let b = clock2();

// check if both arrays are identical
console.log('CHECK: arrays are identical?');
console.log(JSON.stringify(a) === JSON.stringify(b));

// returns clock time array, using array.push
function clock1() {

  console.time('array-push');

  // 1440 minutes in a day
  const limit = 1440;
  const arr = [];

  // start at 00:00
  for(let i = 0; i < limit; i++) {
      arr.push(hhmm(i));
  }

  console.timeEnd('array-push');
  return arr;
}

// returns clock time array, using fixed array
function clock2() {

  console.time('array-fixed');

  // 1440 minutes in a day
  const limit = 1440;
  const arr = new Array(limit);

  // start at 00:00
  for(let i = 0; i < limit; i++) {
      arr[i] = hhmm(i);
  }

  console.timeEnd('array-fixed');
  return arr;
}

// returns HH:MM clock time given the number of minutes since midnight
function hhmm(i) {
  const hh = pad(Math.floor(i / 60)); // 0 to 23
  const mm = pad((i % 60)); // 0 to 59
  return hh + ':' + mm;
}

// returns string in 00 format
function pad(str) {
  str = '' + str;
  return (str.length < 2) ? '0' + str : str;
}
