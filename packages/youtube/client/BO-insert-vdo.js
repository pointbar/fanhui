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
  !! (videoId.length === 11)
  /*
 *  Check the Youtube title structure
*/
checkVideoRoundByTitle = (videoTitle) =>
  videoTitle.match(/^\d{3}-C[A-Z]R[0-9]-.*-.*-\d{2}-\d{2}-\d{4}$/)
/*
 *  Check the Youtube title structure
*/
checkVideoStageByTitle = (videoTitle) =>
  videoTitle.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}$/)
/*
 *  Check the Youtube title structure
*/
checkIsMember = (nickSlack) => {
}
/*
 *  Build a catgory with Youtube title
*/
categoryByTitle = (videoTitle) =>
  videoTitle.match(/(?:Joseki)/) && 'Joseki' ||
  videoTitle.match(/(?:Fuseki)/) && 'Fuseki' ||
  videoTitle.match(/(?:-C[A-Z]R\d-)/) && 'Tournament'
/*
 *  Build a date with Youtube title
*/
dateByTitle = (videoTitle) => {
  const [day, month, year] =
    videoTitle.match(/\d{2}-\d{2}-\d{4}$/)[0].split('-')
  return new Date(+year, +month - 1, +day)
}
/*
 *  Build a rank with Youtube title
*/
rankByTitle = (videoTitle) =>
  +videoTitle.match(/^\d{3}/)[0]
/*
 *  Determine black player with Youtube title
*/
blackPlayerByTitle = (videoTitle) =>
  videoTitle.match(/-C[A-Z]R\d-(\w*)-/)[1]
/*
 *  Determine black player with Youtube title
*/
whitePlayerByTitle = (videoTitle) =>
  videoTitle.match(/-C[A-Z]R\d-\w*-(\w*)-/)[1]
/*
 *  Determine round with Youtube title
*/
roundByTitle = (videoTitle) =>
  +videoTitle.match(/-C[A-Z]R(\d)-/)[1]
/*
 *  Determine league with Youtube title
*/
leagueByTitle = (videoTitle) =>
  videoTitle.match(/-C([A-Z])R\d-/)[1]
/*
 *  Complete an object for stage Joseki or Fuseki
*/
completeStageRecord = (videoRecord) => Object.assign(videoRecord, {
  category: categoryByTitle(videoRecord.title),
  date: dateByTitle(videoRecord.title),
  rank: rankByTitle(videoRecord.title)
})
/*
 *  Complete an object for stage Joseki or Fuseki
*/
completeRoundRecord = (videoRecord) => Object.assign(videoRecord, {
  category: categoryByTitle(videoRecord.title),
  date: dateByTitle(videoRecord.title),
  rank: rankByTitle(videoRecord.title),
  blackPlayer: blackPlayerByTitle(videoRecord.title),
  whitePlayer: whitePlayerByTitle(videoRecord.title),
  round: roundByTitle(videoRecord.title),
  league: leagueByTitle(videoRecord.title)
})
/*
 * FUNNEL composed by promises
 */
const notifBadVideoId = (videoId) =>
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
    if (! checkVideoStageByTitle(vdoRecord.title) &&
        ! checkVideoRoundByTitle(vdoRecord.title)) {
      Notifications.warn('Problème de titre Youtube', `${vdoRecord.title}`)
      reject()
    }
    resolve(vdoRecord)
  })
const notifBadPlayer = (vdoRecord) =>
  new Promise((resolve, reject) => {
    // Stages videos are not concerned
    if (checkVideoStageByTitle(vdoRecord.title))
      resolve(vdoRecord)
    else {
      Meteor.subscribe('isInsei', 'pntbr', () => {
        const blackPlayer = vdoRecord.blackPlayer
        const whitePlayer = vdoRecord.whitePlayer
        if (whitePlayer === Inseis.findOne({nickSlack: whitePlayer})) {
          Notifications.warn(
            `Le joueur blanc : ${whitePlayer} n'est pas membre de l'académie.`)
          reject()
        }
        if (blackPlayer === Inseis.findOne({nickSlack: blackPlayer})) {
          Notifications.warn(
            `Le joueur noir : ${blackPlayer} n'est pas membre de l'académie.`)
          reject()
        }
        resolve(vdoRecord)
      })
    }
  })
const addThumbnail = (videoRecord) =>
  new Promise((resolve, reject) =>
    Meteor.call('getYoutubeThumbnail', videoRecord.video_id,
      (err, thumbnail) => {
        if (err) {
          Notifications.warn(
            'Problème de vignette Youtube', `${err.reason}`)
          reject()
        } else
          resolve(Object.assign(videoRecord, {thumbnail: thumbnail}))
      })
  )
const finalizeVdoRecord = (videoRecord) =>
  new Promise((resolve) => {
    if (checkVideoRoundByTitle(videoRecord.title))
      resolve(completeRoundRecord(videoRecord))
    if (checkVideoStageByTitle(videoRecord.title))
      resolve(completeStageRecord(videoRecord))
  })
const saveVdo = (vdoRecord) =>
  Meteor.call('saveVdo', vdoRecord, () =>
    Notifications.success('Vidéo enregistrée', `${vdoRecord.title}`)
)
checkAndSave = (videoId) => {
  notifBadVideoId(videoId)
    .then(notifVdoExists)
    .then(notifNoYoutubeData)
    .then(buildVdoRecord)
    .then(notifBadVideoTitle)
    .then(finalizeVdoRecord)
    .then(notifBadPlayer)
    .then(addThumbnail)
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
