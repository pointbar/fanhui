queryValueByFieldName = (fieldName, query) =>
  query.split('&')
    .filter(parameter => parameter.match(`^${fieldName}=`))[0]
    .split('=')[1]

youtubeIdCheckLength = (youtubeId) =>
  youtubeId.length === 11

checkTitle = (youtubeTitle) =>
  youtubeTitle.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}$/)

categoryByTitle = (youtubeTitle) =>
  youtubeTitle.match(/(?:Joseki)/) && 'Joseki'
  || youtubeTitle.match(/(?:Fuseki)/) && 'Fuseki'

dateByTitle = (youtubeTitle) => {
  let [,, day, month, year] = youtubeTitle.split('-')
  return new Date(+year, +month - 1, +day)
}

rankByTitle = (youtubeTitle) =>
  +youtubeTitle.match(/^\d{3}/)[0]

/*
 * FUNNEL composed by promises
 */

let notifBadYoutubeId = (youtubeId) =>
  new Promise((resolve, reject) => {
    if (! youtubeIdCheckLength(youtubeId)) {
      Notifications.warn(
        'Problème de référence Youtube', 'Une référence comporte 11 signes.')
      reject()
    } else
      resolve(youtubeId)
  })

let notifVdoExists = (youtubeId) =>
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

let notifNoYoutubeData = (youtubeId) =>
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

let buildVdoRecord = (youtubeData) =>
  new Promise((resolve) =>
    resolve({
      video_id: queryValueByFieldName('video_id', youtubeData.content),
      title: queryValueByFieldName('title', youtubeData.content)
    }))

let notifBadTitle = (vdoRecord) =>
  new Promise((resolve, reject) => {
    if (! checkTitle(vdoRecord.title)) {
      Notifications.warn('Problème de titre Youtube', `${vdoRecord.title}`)
      reject()
    }
    resolve(vdoRecord)
  })

let finalizeVdoRecord = (vdoRecord) =>
  new Promise((resolve) =>
    resolve({
      video_id: vdoRecord.video_id,
      title: vdoRecord.title,
      category: categoryByTitle(vdoRecord.title),
      date: dateByTitle(vdoRecord.title),
      rank: rankByTitle(vdoRecord.title)
    }))

let saveVdo = (vdoRecord) =>
  Meteor.call('saveVdo', vdoRecord, () =>
    Notifications.success('Vidéo enregistrée', `${vdoRecord.title}`))

let checkAndSave = (youtubeId) => {
  notifBadYoutubeId(youtubeId)
    .then(notifVdoExists)
    .then(notifNoYoutubeData)
    .then(buildVdoRecord)
    .then(notifBadTitle)
    .then(finalizeVdoRecord)
    .then(saveVdo)
}

Template.insertVdo.events({
  'click #btn_save_vdo': (evt) => {
    let youtubeId = document.querySelector('#input_youtube_id').value
    evt.preventDefault()
    checkAndSave(youtubeId)
    document.querySelector('#input_youtube_id').value = ''
  }
})
