function callSave(youtubeId) {
  Meteor.call('save_vdo', youtubeId, (error) => {
    if (error) {
      Notifications.warn(
        `La vidéo : ${youtubeId} - n\'a pas été sauvegardée`, error.reason)
    } else
      Notifications.success(`La vidéo : ${youtubeId} - est sauvegardée`)
  })
}

function checkYoutubeId(id) {
  if (id.length !== 11)
    throw new Meteor.Error('Problème de référence Youtube', 'Une référence comporte 11 signes')
  Meteor.subscribe('vdos')
  if (Vdos.find({ youtube_id: youtubeId }).count())
    throw new Meteor.Error('Problème de référence Youtube', 'La vidéo existe déjà')
  return true
}

Template.insertVdo.events({
  'click #btn_save_vdo': (evt) => {
    let youtubeId = document.querySelector('#input_youtube_id').value
    evt.preventDefault()
    try {
      checkYoutubeId(youtubeId)
    } catch (error) {
      Notifications.warn(error.error, error.reason)
      throw new Meteor.Error('bad-youtube-id', 'Bad ID or existant ID')
    }
    callSave(youtubeId)
    document.querySelector('#input_youtube_id').value = ''
  }
})

function checkLink(youtubeId) {
  Vdo.find({youtube_id: youtubeId}).count() === 0 ||
    Session.set('alert', `La vidéo : '${youtubeId}' est déjà présente.`)
  return ! Session.get('alert')
}
