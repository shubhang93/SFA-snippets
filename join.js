var a = [1,2,3,4,5,6,7]
var b = [1,2,3,4,5,6,7,8,9]


var c = [{price:100,id:20},{price:40,id:12}]
var d = [{price:100,id:20},{price:40,id:12}, {price:300,id:22},{price:222,id:45}]

var join = function(list1,list2, joinCriteria) {
    let res = []
    if(list1.length < list2.length) {
        let criteraList = generateCriteriaList(list1,joinCriteria)
        return list2.filter(el=>criteraList.includes(el[joinCriteria]))
    }
    let criteraList = generateCriteriaList(list2,criteraList)
    return list1.filter(el=>criteraList.includes(el[joinCriteria]))
}

var generateCriteriaList = function(list,criteria) {
    return list.map(el=>el[criteria])
}

var mapValueOnKey = function(list,key) {
    return list.reduce((ax,curr)=> ({...ax, [curr[key]]:curr}),{})
}

var mergeLists = function(list1,list2,joinCriteria) {
  
}

console.log(join(c,d,'id'))