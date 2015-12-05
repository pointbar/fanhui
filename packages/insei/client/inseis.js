isInsei = (insei, callback) =>
  Meteor.call('isInsei', insei, (err, result) => callback(result))
