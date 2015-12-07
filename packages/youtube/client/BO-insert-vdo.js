/*
 *  Extract value from a Youtube JSON response
*/
queryValueByFieldName = (fieldName, query) =>
  query.split('&')
    .filter(parameter => parameter.match(`^${fieldName}=`))[0]
    .split('=')[1]
/*
 *  Check the length of a Youtube Id
*/
checkVideoIdLength = (videoId) =>
  videoId.length === 11
/*
 *  Check the Youtube title structure
*/
checkVideoTitle = (videoTitle) =>
  videoTitle.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}$/)
/*
 *  Build a catgory with Youtube title
*/
categoryByTitle = (videoTitle) =>
  videoTitle.match(/(?:Joseki)/) && 'Joseki'
  || videoTitle.match(/(?:Fuseki)/) && 'Fuseki'
/*
 *  Build a date with Youtube title
*/
dateByTitle = (videoTitle) => {
  const [,, day, month, year] = videoTitle.split('-')
  return new Date(+year, +month - 1, +day)
}
/*
 *  Build a rank with Youtube title
*/
rankByTitle = (videoTitle) =>
  +videoTitle.match(/^\d{3}/)[0]
/*
 * FUNNEL composed by promises
 */
let notifBadVideoId = (videoId) =>
  new Promise((resolve, reject) => {
    if (! checkVideoIdLength(videoId)) {
      Notifications.warn(
        'Problème de référence Youtube', 'Une référence comporte 11 signes.')
      reject()
    } else
      resolve(videoId)
  })
const notifVdoExists = (videoId) =>
  new Promise((resolve, reject) =>
    Meteor.call('isVdoExists', videoId, (err, isExists) => {
      if (isExists) {
        Notifications.warn(
          'Problème de référence Youtube', `${videoId} - est déjà présente.`)
        reject()
      } else
        resolve(videoId)
    })
  )
const notifNoYoutubeData = (videoId) =>
  new Promise((resolve, reject) =>
    Meteor.call('collectYoutubeData', videoId, (err, youtubeData) => {
      if (err) {
        Notifications.warn(
          'Problème de référence Youtube', `${err.reason}`)
        reject()
      } else
        resolve(youtubeData)
    })
  )
const buildVdoRecord = (youtubeData) =>
  new Promise((resolve) =>
    resolve({
      video_id: queryValueByFieldName('video_id', youtubeData.content),
      title: queryValueByFieldName('title', youtubeData.content)
    })
  )
const notifBadVideoTitle = (vdoRecord) =>
  new Promise((resolve, reject) => {
    if (! checkVideoTitle(vdoRecord.title)) {
      Notifications.warn('Problème de titre Youtube', `${vdoRecord.title}`)
      reject()
    }
    resolve(vdoRecord)
  })
const addThumbnail = ({title, video_id}) =>
  new Promise((resolve, reject) =>
    Meteor.call('getYoutubeThumbnail', video_id, (err, thumbnail) => {
      if (err) {
        Notifications.warn(
          'Problème de vignette Youtube', `${err.reason}`)
        reject()
      } else {
        resolve({
          video_id: video_id,
          title: title,
          thumbnail: thumbnail})
      }
    })
  )
const finalizeVdoRecord = ({title, video_id, thumbnail}) =>
  new Promise((resolve) =>
    resolve({
      video_id: video_id,
      title: title,
      thumbnail: thumbnail,
      category: categoryByTitle(title),
      date: dateByTitle(title),
      rank: rankByTitle(title)
    })
  )
const saveVdo = (vdoRecord) =>
  Meteor.call('saveVdo', vdoRecord, () =>
    Notifications.success('Vidéo enregistrée', `${vdoRecord.title}`))
checkAndSave = (videoId) => {
  notifBadVideoId(videoId)
    .then(notifVdoExists)
    .then(notifNoYoutubeData)
    .then(buildVdoRecord)
    .then(notifBadVideoTitle)
    .then(addThumbnail)
    .then(finalizeVdoRecord)
    .then(saveVdo)
}
Template.insertVdoBO.events({
  'click #btn_save_vdo': (evt) => {
    const videoId = document.querySelector('#input_youtube_id').value
    evt.preventDefault()
    checkAndSave(videoId)
    document.querySelector('#input_youtube_id').value = ''
  }
})
