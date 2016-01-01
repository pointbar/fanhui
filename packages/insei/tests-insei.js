if (Meteor.isClient) {
  Tinytest.add('Check if pntbr is an Insei', (test) =>
    test.isTrue(isInsei('pntbr'))
  )
  Tinytest.add('Check if oragefan is a sensei', (test) =>
    test.isTrue(isSensei('oragefan'))
  )
}

if (Meteor.isServer) {
  Tinytest.add('Update a user has all properties', (test) => {
    const users = {
      old: {name: 'Jean', status: 'sensei', rank: '8k'},
      new: {name: 'Rob', rank: '8k', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', rank: '8k', skype: 'or'}
    test.length(Object.keys(updateUser(users.old, users.new)), 4)
  })
  Tinytest.add('Update a user has change the name', (test) => {
    const users = {
      old: {name: 'Jean', status: 'sensei'},
      new: {name: 'Rob', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', skype: 'or'}
    test.equal(updateUser(users.old, users.new).name, 'Rob')
  })
}
