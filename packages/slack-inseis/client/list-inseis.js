Template.inseisList.helpers({
  inseis: () => Inseis.find({}, {sort: {slack_lastName: 1}}),
  count: () => Inseis.find().fetch().length
})
