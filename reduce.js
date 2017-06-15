var reduceFn = (fn, initialValue) =>
  function(list) {
    var accumulator = initialValue
    var res
    list.forEach(function(currentValue){
      res = fn(accumulator, currentValue)
      accumulator = res
    })
    return res
  }
