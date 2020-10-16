function loadUsers(userIds, load, done) {
      var users = []
      usedIds.forEach((id, index)=>{
        load(id, function(user) {
          users[index] = user
          if (++completed === userIds.length) return done(users)
        })
      })
      done(users)
      return users
}
module.exports = loadUsers
