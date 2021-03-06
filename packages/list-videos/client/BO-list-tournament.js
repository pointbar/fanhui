Template.tournamentBO.helpers({
  rounds: () =>
    _.uniq(Vdos.find({
      category: 'Great tournament'}, {
        fields: {round: 1},
        sort: {round: 1}
      }).fetch(), true, ({round}) => round)
})

Template.listLeagueBO.helpers({
  vdos: () =>
    Vdos.find({
      category: 'Tournament',
      league: Template.currentData().league,
      round: Template.currentData().round}, {
        sort: {rank: -1}})
})

Template.listVdosTournamentBO.helpers({
  vdos: () =>
    Vdos.find({
      category: 'Great tournament',
      round: Template.currentData().round}, {
        sort: {rank: -1}})
})

Template.listTournamentBO.events({
  'click .btn_remove_vdo': (event) =>
    Vdos.remove(event.target.id.replace(/btn-/, ''))
})
