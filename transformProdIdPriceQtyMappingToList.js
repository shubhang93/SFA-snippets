var transformProductIdQtyPriceMappingToList = function(prodIdQtyMapping) {
    var res = []
    for(prop in prodIdQtyMapping) {
      res.push(Object.assign({}, prodIdQtyMapping[prop], id: prop))
    }
    return res
}
