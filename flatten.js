var flattenFn = function(list, oldAx = []) {
  return list.reduce((ax, curr) => {
    if (curr instanceof Array) {
      return flattenFn(curr, ax);
    }
    return [...ax, curr];
  }, oldAx);
};

export flattenFn
