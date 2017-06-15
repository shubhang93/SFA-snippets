"use strict"

var myMap = function(arr, fn) {
  var res = [];
  arr.forEach(function(v, i, a) {
    res.push(fn(v, i, a));
  });
  return res;
};

var myFilter = function(arr, fn) {
  var res = [];
  arr.forEach(function(v, i, a) {
    if (fn(v, i, a)) res.push(v);
  });
  return res;
};
