var getAllKeys = function(object, oldKeys = []) {
  var keys = oldKeys
  for(key in object) {
      if(object[key] instanceof Object) {
          keys.push(`${key}`)
          getAllKeys(object[key], keys)
        }
      else keys.push(`${key}`)
    }
  return keys
}
