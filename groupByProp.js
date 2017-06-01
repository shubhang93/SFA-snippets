var grouByProp = (prop) => (list) => list.reduce((ax, curr, idx, list) => Object.assign({}, ax, {
    [curr.id]: list.filter(e => e[prop] === curr[prop])
}), {})
