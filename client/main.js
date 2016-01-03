_.extend(Notifications.defaultOptions, {
  timeout: 6000
})

Meteor.startup(() =>  Meteor.apply('updateSlackInfos'))
