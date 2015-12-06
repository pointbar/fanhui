Template.nav.onCreated(function () {
  let insei = document.location.href.split('/').pop()
  this.subscribe('isInsei', insei)
})

Template.nav.helpers({
  isInsei: () => !! Inseis.findOne(),
  isSensei: () => (typeof Inseis.findOne() !== 'undefined') &&
    (Inseis.findOne().nickSlack === 'oragefan'),
  user: () => Inseis.findOne().nickSlack
})
