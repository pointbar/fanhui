youtubeIdCheckLength = (youtubeId) =>
  youtubeId.length === 11

notifBadYoutubeId = (youtubeId) =>
  new Promise((resolve, reject) => {
    if (! youtubeIdCheckLength(youtubeId)) {
      Notifications.warn(
        'Problème de référence Youtube', 'Une référence comporte 11 signes.')
      reject()
    } else
      resolve(youtubeId)
  })

notifVdoExists = (youtubeId) =>
  new Promise((resolve, reject) =>
    Meteor.call('isVdoExists', youtubeId, (err, isExists) => {
      if (isExists) {
        Notifications.warn(
          'Problème de référence Youtube', `${youtubeId} - est déjà présente.`)
        reject()
      } else
        resolve(youtubeId)
    })
  )

notifNoYoutubeData = (youtubeId) =>
  new Promise((resolve, reject) =>
    Meteor.call('collectYoutubeData', youtubeId, (err, youtubeData) => {
      if (err) {
        Notifications.warn(
          'Problème de référence Youtube', `${err.reason}`)
        reject()
      } else
        resolve(youtubeData)
    })
  )

callSave = (youtubeData) => {
  console.info('data', youtubeData.content)
}
checkAndSave = (youtubeId) => {
  notifBadYoutubeId(youtubeId)
    .then(notifVdoExists)
    .then(notifNoYoutubeData)
    .then(callSave)
}

Template.insertVdo.events({
  'click #btn_save_vdo': (evt) => {
    let youtubeId = document.querySelector('#input_youtube_id').value
    evt.preventDefault()
    checkAndSave(youtubeId)
    document.querySelector('#input_youtube_id').value = ''
  }
})
