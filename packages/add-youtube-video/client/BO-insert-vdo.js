Template.insertVdoBO.events({
  'click #btn_save_vdo': (evt) => {
    const videoId = document.querySelector('#input_youtube_id').value
    evt.preventDefault()
    checkAndSave(videoId)
    document.querySelector('#input_youtube_id').value = ''
  }
})
