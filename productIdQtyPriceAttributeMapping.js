var obj = {
  '23': { q: 'X', p: 200 },
  '25': { q: 1, p: 500 },
  '36': { q: 'Z', p: 40 },
};
obj;
var R = require('ramda');
R;
var isQtyNaN = value => isNaN(value.q);
isQtyNaN;
R.pickBy(isQtyNaN)(obj);
var obj = {
  '23': { q: 23, p: 200 },
  '25': { q: 1, p: 500 },
  '36': { q: 'Z', p: 40 },
};
var isQtyNaN = value => !isNaN(value.q);
R.pickBy(isQtyNaN)(obj);
var filteredValues = R.pickBy(isQtyNaN)(obj);
filteredValues;
var keys = Object.keys(filteredValues);
keys;
var values = keys.map(key => filteredValues[key]);
values;
values.reduce((ax, currVal) => ax + currVal.q * currVal.p, 0);
