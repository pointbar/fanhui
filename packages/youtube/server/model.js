Meteor.publish('vdos', () => {
  return Vdos.find()
})

Meteor.methods({
  save_vdo: (youtubeId) => {
    try {
      let result =
        HTTP.get(`http://youtube.com/get_video_info?video_id=${youtubeId}`)
      if (result.content.match(/errorcode=/))
        throw new Meteor.Error('no-yt-video', 'Référence Youtube incorrecte')
    } catch (error) {
      if (error.reason)
        throw new Meteor.Error(error.error, error.reason)
      else
        throw new Meteor.Error(error.Error, 'Impossible d\'accéder à Youtube')
    }
  }
})

function checkTitle(youtubeTitle) {
  Session.set('alert', false)
  ;(! youtubeTitle.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}/)) &&
    Session.set('alert', `Le titre : '${youtubeTitle}' est incorrecte.`)
  return ! Session.get('alert')
}

function getVdoTitle (youtubeId, callback) {
  Meteor.call('getYoutubeTitle', youtubeId, (error, result) => {
    let youtubeTitle = result.content.split('&')
      .filter(parameter => { return (parameter.match('^title=')) })[0]
      .split('=')[1]
    checkTitle(youtubeTitle) && callback(youtubeTitle)
  })
}

function getTypeByTitle(title) {
  return title.match(/(?:Joseki)/) && 'Joseki'
    || title.match(/(?:Fuseki)/) && 'Fuseki'
}

function getRankByTitle(title) {
  return +title.match(/^\d{3}/)[0]
}

function getDateByTitle(title) {
  let date =  new Date(
    +title.split('-')[4],
    +title.split('-')[3] - 1,
    +title.split('-')[2]
  )
  return date
}

function saveLink(youtubeId) {
  getVdoTitle(youtubeId, function (youtubeTitle) {
    let type = getTypeByTitle(youtubeTitle)
    let rank = getRankByTitle(youtubeTitle)
    let date = getDateByTitle(youtubeTitle)
    Vdo.insert({
      youtube_id: youtubeId,
      rank: rank,
      type: type,
      date: date,
      youtube_title: youtubeTitle
    })
    Session.set('alert',
      `La video : '${youtubeTitle}' est maintenant disponible.`)
  })
}
