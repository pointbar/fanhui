if (Meteor.isClient) {
  Tinytest.add('Check if "1234" is not correct.', (test) => {
    test.isFalse(youtubeIdCheckLength(1234))
  })
  Tinytest.addAsync('Check the "AxRg12345tG" reférence exists in our collection.',
    (test, next) => {
      Meteor.call('isVdoExists', 'AxRg12345tG', (err, result) => {
        test.isTrue(result)
        next()
      })
    })
  Tinytest.addAsync('Check the "12345678901" reférence don\'t exists in collection.',
    (test, next) => {
      Meteor.call('isVdoExists', '12345678901', (err, result) => {
        test.isFalse(result)
        next()
      })
    })
}

if (Meteor.isServer) {
}
