Template.listLeagueBO.onCreated(function () {
  this.subscribe('vdos')
})

Template.roundFO.helpers({
  rounds: () =>
    _.uniq(Vdos.find({
      category: 'Tournament'}, {
        fields: {round: 1},
        sort: {round: 1}
      }).fetch(), true, ({round}) => round)
})

Template.listRoundFO.helpers({
  leagues: () =>
    _.uniq(Vdos.find({
      category: 'Tournament'}, {
        fields: {league: 1},
        sort: {league: 1}
      }).fetch(), true, ({league}) => league)
})

Template.listLeagueFO.helpers({
  vdos: () =>
    Vdos.find({
      category: 'Tournament',
      league: Template.currentData().league,
      round: Template.currentData().round}, {
        sort: {rank: -1}})
})

Template.vdoRoundFO.helpers({
  nickSlack: () => slackNameFromUrl()
})
