Meteor.publish('vdos', () => {
  return Vdos.find()
})

Meteor.methods({
  collectYoutubeData: (youtubeId) => {
    let youtubeData
    try {
      youtubeData =
        HTTP.get(`http://youtube.com/get_video_info?video_id=${youtubeId}`)
      if (youtubeData.content.match(/errorcode=/))
        throw new Meteor.Error('no-yt-video', 'Référence Youtube incorrecte')
    } catch (error) {
      if (error.reason)
        throw new Meteor.Error(error.error, error.reason)
      else
        throw new Meteor.Error(error.Error, 'Impossible d\'accéder à Youtube')
    }
    return youtubeData
  },
  isVdoExists: (youTubeId) => !! Vdos.find({youtube_id: youTubeId}).count(),
  saveVdo: (vdoRecord) => Vdos.insert(vdoRecord)
})
