function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every( user1 => goodUsers.some(user2 => user1.id == user2.id) )
    };
}

module.exports = checkUsersValid
