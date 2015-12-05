if (Meteor.isClient) {
  Tinytest.addAsync(
    'Check if pnt is an Insei.', (test, next) =>
      isInsei('pnt', (result) => {
        test.isTrue(result)
        next()
      }))
  Tinytest.addAsync(
    'verify that mezig isn\'t an Insei.', (test, next) =>
      isInsei('mezig', (result) => {
        test.isFalse(result)
        next()
      }))
}
