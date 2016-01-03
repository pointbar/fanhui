if (Meteor.isClient) {
  Tinytest.add('Check the LastName of barbapapa', (test) =>
    test.equal(getInseiBySlackName('barbapapa').slack_lastName, 'Lan')
  )
  Tinytest.add('Check if barbapapa is an Insei', (test) =>
    test.isTrue(isInsei('barbapapa'))
  )
  Tinytest.add('Check if Solee is a sensei', (test) =>
    test.isTrue(isSensei('Solee'))
  )
  Tinytest.add('barbapapa is not a sensei', (test) =>
    test.isFalse(isSensei('barbapapa'))
  )
}

if (Meteor.isServer) {
// getRelevantInfosBySlackId(slackId)
  Tinytest.add('Get skype field from relevant infos', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.equal(
      slackUsers.getRelevantInfosBySlackId('A8971').slack_skype, 'Fadher')
  })
  Tinytest.add('Get skype field from slackUsers', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.equal(slackUsers._getInfosBySlackId('A1234').profile.skype, 'funny')
  })
  Tinytest.add('SlackBot is a bot', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.isTrue(slackUsers._isBot('USLACKBOT'))
  })
  Tinytest.add('slackUsers without bot has correct length', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.length(slackUsers.slackIdsWithoutBots(), 3)
  })
  Tinytest.add('Update a user has all properties', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    const inseis = {
      old: {name: 'Jean', status: 'sensei', rank: '8k'},
      new: {name: 'Rob', rank: '8k', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', rank: '8k', skype: 'or'}
    test.length(Object.keys(slackUsers.updateInfos(inseis.old, inseis.new)), 5)
  })
  Tinytest.add('Update a user has change the name', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    const inseis = {
      old: {name: 'Roby', status: 'sensei'},
      new: {name: 'Rob', skype: 'or'}
    }
    // updated: {name: 'Rob', status: 'sensei', skype: 'or'}
    test.equal(slackUsers.updateInfos(inseis.old, inseis.new).name, 'Rob')
  })
  Tinytest.add('Add created date to new values', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.isTrue(
      slackUsers.addDefault({name: 'Rob', skype: 'or'}).created instanceof Date)
  })
  Tinytest.add('Add default value preserve values', (test) => {
    const slackUsers = new SlackInseis(slackUsersJson)
    test.equal(slackUsers.addDefault({name: 'Bob', skype: 'or'}).name, 'Bob')
  })
}
