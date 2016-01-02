Template.listLeagueBO.onCreated(function () {
  this.subscribe('vdos')
})

Template.tournamentFO.helpers({
  rounds: () =>
    // Replace category by 'tournament' and rank by round
    _.uniq(Vdos.find({
      category: 'Joseki'}, {
        fields: {rank: 1},
        sort: {rank: 1}
      }).fetch(), true, ({rank}) => rank)
})

Template.listTournamentFO.helpers({
  leagues: () => [{league: 'Joseki'}, {league: 'Fuseki'}]
})

Template.listLeagueFO.helpers({
  vdos: () =>
    Vdos.find({
      category: Template.currentData().league}, {
        sort: {rank: -1}})
})

Template.vdoTournamentFO.helpers({
  nickSlack: () => nickSlackFromUrl()
})
