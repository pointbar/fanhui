Meteor.publish('vdos', () => {
  return Vdos.find()
})
Meteor.methods({
  getYoutubeThumbnail: videoId => {
    try {
      const thumbnail = HTTP.get(`http://img.youtube.com/vi/${videoId}/0.jpg`,
        {responseType: 'buffer'})
      return new Buffer(thumbnail.content).toString('base64')
    } catch (error) {
      throw new Meteor.Error(error.Error, 'Impossible d\'accéder à Youtube')
    }
  },
  collectYoutubeData: (videoId) => {
    try {
      const youtubeData =
        HTTP.get(`http://youtube.com/get_video_info?video_id=${videoId}`)
      if (youtubeData.content.match(/errorcode=/))
        throw new Meteor.Error('no-yt-video', 'Référence Youtube incorrecte')
      return youtubeData
    } catch (error) {
      if (error.reason)
        throw new Meteor.Error(error.error, error.reason)
      else
        throw new Meteor.Error(error.Error, 'Impossible d\'accéder à Youtube')
    }
  },
  isVdoExists: (videoId) => !! Vdos.find({video_id: videoId}).count(),
  saveVdo: (vdoRecord) => Vdos.insert(vdoRecord)
})
