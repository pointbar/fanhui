Template.nav.helpers({
  isInsei: () => isInsei(nickSlackFromUrl()),
  isSensei: () => isSensei(nickSlackFromUrl()),
  nickSlack: () => nickSlackFromUrl()
})
