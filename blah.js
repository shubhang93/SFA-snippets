var _ = require('lodash')
var data = [{"lotId":5,"poNumber":"1007443935","items":[{"id":5,"poNumber":"1007443935","tentativeDate":"2017-07-21T18:30:00Z","firstCommitmentDate":"2017-07-21T18:30:00Z","mode":"Road"},{"id":5,"poNumber":"1007443935","tentativeDate":"2017-07-21T18:30:00Z","firstCommitmentDate":"2017-07-21T18:30:00Z","mode":"Road"},{"id":5,"poNumber":"1007443935","tentativeDate":"2017-07-21T18:30:00Z","firstCommitmentDate":"2017-07-21T18:30:00Z","mode":"Road"},{"id":5,"poNumber":"1007443935","tentativeDate":"2017-07-21T18:30:00Z","firstCommitmentDate":"2017-07-21T18:30:00Z","mode":"Road"}]},{"lotId":6,"poNumber":"1007443935","items":[{"id":6,"poNumber":"1007443935","tentativeDate":"2017-09-09T18:30:00Z","firstCommitmentDate":"2017-09-09T18:30:00Z","mode":"Road"},{"id":6,"poNumber":"1007443935","tentativeDate":"2017-09-09T18:30:00Z","firstCommitmentDate":"2017-09-09T18:30:00Z","mode":"Road"},{"id":6,"poNumber":"1007443935","tentativeDate":"2017-09-09T18:30:00Z","firstCommitmentDate":"2017-09-09T18:30:00Z","mode":"Road"},{"id":6,"poNumber":"1007443935","tentativeDate":"2017-09-09T18:30:00Z","firstCommitmentDate":"2017-09-09T18:30:00Z","mode":"Road"},{"id":6,"poNumber":"1007443935","tentativeDate":"2017-09-09T18:30:00Z","firstCommitmentDate":"2017-09-09T18:30:00Z","mode":"Road"}]},{"lotId":7,"poNumber":"1007443533","items":[{"id":7,"poNumber":"1007443533","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Sea_LCL"}]},{"lotId":8,"poNumber":"1007437854","items":[{"id":8,"poNumber":"1007437854","tentativeDate":"2017-07-22T18:30:00Z","firstCommitmentDate":"2017-07-22T18:30:00Z","mode":"Air_Courier"},{"id":8,"poNumber":"1007437854","tentativeDate":"2017-07-22T18:30:00Z","firstCommitmentDate":"2017-07-22T18:30:00Z","mode":"Air_Courier"},{"id":8,"poNumber":"1007437854","tentativeDate":"2017-07-22T18:30:00Z","firstCommitmentDate":"2017-07-22T18:30:00Z","mode":"Air_Courier"},{"id":8,"poNumber":"1007437854","tentativeDate":"2017-07-22T18:30:00Z","firstCommitmentDate":"2017-07-22T18:30:00Z","mode":"Air_Courier"}]},{"lotId":9,"poNumber":"1007437854","items":[{"id":9,"poNumber":"1007437854","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Air_Courier"},{"id":9,"poNumber":"1007437854","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Air_Courier"},{"id":9,"poNumber":"1007437854","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Air_Courier"},{"id":9,"poNumber":"1007437854","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Air_Courier"}]},{"lotId":10,"poNumber":"1007437854","items":[{"id":10,"poNumber":"1007437854","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Air_Courier"},{"id":10,"poNumber":"1007437854","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Air_Courier"},{"id":10,"poNumber":"1007437854","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Air_Courier"},{"id":10,"poNumber":"1007437854","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Air_Courier"}]},{"lotId":11,"poNumber":"1007443935","items":[{"id":11,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":11,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":11,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":11,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"}]},{"lotId":12,"poNumber":"1007438661","items":[{"id":12,"poNumber":"1007438661","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Sea_LCL"},{"id":12,"poNumber":"1007438661","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Sea_LCL"}]},{"lotId":13,"poNumber":"1007437846","items":[{"id":13,"poNumber":"1007437846","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Road"}]},{"lotId":14,"poNumber":"1007437846","items":[{"id":14,"poNumber":"1007437846","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"}]},{"lotId":15,"poNumber":"1007438624","items":[{"id":15,"poNumber":"1007438624","tentativeDate":"2017-09-22T18:30:00Z","firstCommitmentDate":"2017-09-22T18:30:00Z","mode":"Air_Courier"},{"id":15,"poNumber":"1007438624","tentativeDate":"2017-09-22T18:30:00Z","firstCommitmentDate":"2017-09-22T18:30:00Z","mode":"Air_Courier"}]},{"lotId":16,"poNumber":"1007438624","items":[{"id":16,"poNumber":"1007438624","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Air_Courier"},{"id":16,"poNumber":"1007438624","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Air_Courier"}]},{"lotId":17,"poNumber":"1007438514","items":[{"id":17,"poNumber":"1007438514","tentativeDate":"2017-07-29T18:30:00Z","firstCommitmentDate":"2017-07-29T18:30:00Z","mode":"Road"}]},{"lotId":19,"poNumber":"1007443935","items":[{"id":19,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":19,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":19,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"},{"id":19,"poNumber":"1007443935","tentativeDate":"2017-08-05T18:30:00Z","firstCommitmentDate":"2017-08-05T18:30:00Z","mode":"Road"}]},{"lotId":20,"poNumber":"1007443935","items":[{"id":20,"poNumber":"1007443935","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Road"},{"id":20,"poNumber":"1007443935","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Road"},{"id":20,"poNumber":"1007443935","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Road"},{"id":20,"poNumber":"1007443935","tentativeDate":"2017-10-28T18:30:00Z","firstCommitmentDate":"2017-10-28T18:30:00Z","mode":"Road"}]}]


var count = {}

var r = data.map(po => {
    if(!count[po.poNumber])
        count[po.poNumber] =1
    else 
        count[po.poNumber] = count[po.poNumber]+1
    po.lot=count[po.poNumber]
    return po    
})

console.log(r)
