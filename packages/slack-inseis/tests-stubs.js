if (Meteor.isServer) {
  slackUsersJson = {
    A8971: {
      name: 'Bob', is_admin: true, tz: 'Paris',
      profile: {
        first_name: 'Bob',
        last_name: 'Geldoff',
        skype: 'Fadher',
        email: 'slackInfos@email',
        image_48: 'http://image_48',
        image_192: 'http://image_192'}
    },
    A1234: {name: 'Bob', profile: {skype: 'funny', email: 'ab'}},
    BX235: {name: 'Rob', profile: {skype: '', email: 'bx'}},
    USLACKBOT: {name: 'slackBot', profile: {skype: '', email: ''}}
  }
  Inseis.find().map((elt) => Inseis.remove(elt._id))
  Inseis.insert({
    slack_firstName: 'Stef',
    slack_lastName: 'Lan',
    slack_name: 'barbapapa',
    is_admin: false
  })
  Inseis.insert({
    slack_firstName: 'Hui',
    slack_lastName: 'Fan',
    slack_name: 'Solee',
    slack_is_admin: true
  })
}

if (Meteor.isClient)
  Meteor.subscribe('inseis')
