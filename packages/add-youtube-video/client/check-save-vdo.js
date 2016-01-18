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
 *  Complete an object for course Joseki or Fuseki
*/
completeCourseRecord = (videoRecord) => {
  const ytTitle = new YoutubeTitle(videoRecord.title)
  return Object.assign(videoRecord, {
    category: ytTitle.getCategory(),
    date: ytTitle.getDate(),
    rank: ytTitle.getRank()
  })
}
/*
 *  Complete an object for tournament rounds
*/
completeRoundRecord = (videoRecord) => {
  const ytTitle = new YoutubeTitle(videoRecord.title)
  return Object.assign(videoRecord, {
    category: ytTitle.getCategory(),
    date: ytTitle.getDate(),
    rank: ytTitle.getRank(),
    blackPlayer: ytTitle.getBlackPlayer(),
    whitePlayer: ytTitle.getWhitePlayer(),
    round: ytTitle.getRound(),
    league: ytTitle.getLeague()
  })
}
/*
 *  Complete an object for great tournament rounds
*/
completeGreatTournamentRecord = (videoRecord) => {
  const ytTitle = new YoutubeTitle(videoRecord.title)
  return Object.assign(videoRecord, {
    category: ytTitle.getCategory(),
    date: ytTitle.getDate(),
    rank: ytTitle.getRank(),
    blackPlayer: ytTitle.getBlackPlayer(),
    whitePlayer: ytTitle.getWhitePlayer(),
    round: ytTitle.getRound(),
    season: ytTitle.getSeason()
  })
}
/*
 * FUNNEL composed by promises
 */
const notifVideoId = (videoId) =>
  new Promise((resolve, reject) => {
    if (! checkVideoIdLength(videoId)) {
      Notifications.warn(
        'Problème de référence Youtube', 'Une référence comporte 11 signes.')
      reject()
    } else
      resolve(videoId)
  })
const notifVideoExists = (videoId) =>
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
const notifYoutubeData = (videoId) =>
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
const buildVideoRecord = (youtubeData) =>
  new Promise((resolve) =>
    resolve({
      video_id: queryValueByFieldName('video_id', youtubeData.content),
      title: queryValueByFieldName('title', youtubeData.content)
    })
  )
const notifVideoTitle = (videoRecord) =>
  new Promise((resolve, reject) => {
    const ytTitle = new YoutubeTitle(videoRecord.title)
    if (
      ! ytTitle.isVideoCourse() &&
      ! ytTitle.isVideoRound() &&
      ! ytTitle.isVideoGreatTournament()) {
      Notifications.warn('Problème de titre Youtube', `${ytTitle.title}`)
      reject()
    }
    resolve(videoRecord)
  })
const finalizeVideoRecord = (videoRecord) =>
  new Promise((resolve) => {
    const ytTitle = new YoutubeTitle(videoRecord.title)
    if (ytTitle.isVideoRound())
      resolve(completeRoundRecord(videoRecord))
    if (ytTitle.isVideoCourse())
      resolve(completeCourseRecord(videoRecord))
    if (ytTitle.isVideoGreatTournament())
      resolve(completeGreatTournamentRecord(videoRecord))
  })
const notifPlayer = (videoRecord) =>
  new Promise((resolve, reject) => {
    const ytTitle = new YoutubeTitle(videoRecord.title)
    // Courses videos are not concerned
    if (ytTitle.isVideoCourse())
      resolve(videoRecord)
    else {
      const blackPlayer = ytTitle.getBlackPlayer()
      const whitePlayer = ytTitle.getWhitePlayer()
      if (! isInsei(whitePlayer)) {
        Notifications.warn(
          `Le joueur blanc : ${whitePlayer} n'est pas membre de l'académie.`)
        reject()
      }
      if (! isInsei(blackPlayer)) {
        Notifications.warn(
          `Le joueur noir : ${blackPlayer} n'est pas membre de l'académie.`)
        reject()
      }
      resolve(videoRecord)
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
const saveVideo = (videoRecord) =>
  Meteor.call('saveVdo', videoRecord, () =>
    Notifications.success('Vidéo enregistrée', `${videoRecord.title}`)
)
checkAndSave = (videoId) => {
  notifVideoId(videoId)
    .then(notifVideoExists)
    .then(notifYoutubeData)
    .then(buildVideoRecord)
    .then(notifVideoTitle)
    .then(finalizeVideoRecord)
    .then(notifPlayer)
    .then(addThumbnail)
    .then(saveVideo)
}
