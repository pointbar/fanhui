Meteor.startup(() =>
  // Hide notification after 5 seconds
  _.extend(Notifications.defaultOptions, {
    timeout: 5000
  })
)
