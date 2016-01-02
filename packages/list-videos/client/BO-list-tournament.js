Template.tournamentBO.helpers({
  rounds: () =>
    // Replace category by 'tournament' and rank by round
    _.uniq(Vdos.find({
      category: 'Joseki'}, {
        fields: {rank: 1},
        sort: {rank: 1}
      }).fetch(), true, ({rank}) => rank)
})

Template.listTournamentBO.helpers({
  leagues: () => [{league: 'Joseki'}, {league: 'Fuseki'}]
})

Template.listLeagueBO.helpers({
  vdos: () =>
    Vdos.find({
      category: Template.currentData().league}, {
        sort: {rank: -1}})
})

Template.listTournamentBO.events({
  'click .btn_remove_vdo': (event) =>
    Vdos.remove(event.target.id.replace(/btn-/, ''))
})
