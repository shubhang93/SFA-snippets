var excludeProps = function(...props) {
    return function(src) {
        var tgt = Object.assign({}, src);
        var propsToExclude = [...props];
        for (let prop in tgt) {
            if (propsToExclude.includes(prop)) {
              delete tgt[prop]
            }
        }
        return tgt
    }
}
