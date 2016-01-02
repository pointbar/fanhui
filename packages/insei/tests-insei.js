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
    const jean = new Insei()
    const inseis = {
      old: {name: 'Jean', status: 'sensei', rank: '8k'},
      new: {name: 'Rob', rank: '8k', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', rank: '8k', skype: 'or'}
    test.length(Object.keys(jean.updateInfos(inseis.old, inseis.new)), 5)
  })
  Tinytest.add('Update a user has change the name', (test) => {
    const roby = new Insei()
    const inseis = {
      old: {name: 'Roby', status: 'sensei'},
      new: {name: 'Rob', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', skype: 'or'}
    test.equal(roby.updateInfos(inseis.old, inseis.new).name, 'Rob')
  })
  Tinytest.add('Add created date to new values', (test) => {
    const rob = new Insei()
    test.isTrue(
      rob.addDefault({name: 'Rob', skype: 'or'}).created instanceof Date)
  })
  Tinytest.add('Add default value preserve values', (test) => {
    const bob = new Insei()
    test.equal(bob.addDefault({name: 'Bob', skype: 'or'}).name, 'Bob')
  })
}
