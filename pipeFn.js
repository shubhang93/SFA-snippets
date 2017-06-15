var pipeFn = function(fns) {
  return function(data) {
    return fns.reduce((ax, currFn) => currFn(ax), data || undefined);
  };
};
