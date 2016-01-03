Template.inseiEdit.helpers({
  insei: () => getInseiBySlackName(slackNameFromUrl())
})

Template.inseiEdit.events({
  'click button': (event) => {
    const field = event.target.getAttribute('data-field')
    const record = getInseiBySlackName(slackNameFromUrl())
    record[field] = document.querySelector(`input[data-field=${field}]`).value
    Inseis.update(record._id, record)
    Notifications.success(
      'Informations de profil enregistrées', `${field} => ${record[field]}`)
  }
})
