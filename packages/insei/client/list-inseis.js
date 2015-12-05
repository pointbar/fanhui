Template.inseisList.onCreated(function () {
  this.subscribe('inseis')
})

Template.inseisList.helpers({
  inseis: () => Inseis.find(
    {role: 'insei'},
    {sort: {lastName: 1}})
})
