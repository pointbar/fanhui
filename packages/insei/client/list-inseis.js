Template.inseisList.helpers({
  inseis: () => Inseis.find(
    {role: 'insei'},
    {sort: {slack_lastName: 1}})
})
