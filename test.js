var roles = ['admin']

function getRole = function(roles) {
  var roleType
  roles.forEach(role => {
    if(role === 'admin'){
      roleType = role;
      return true
    }
  })
  return roleType
}

console.log(getRole(roles))