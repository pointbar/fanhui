Template.nav.helpers({
  isInsei: () => isInsei(slackNameFromUrl()),
  isSensei: () => isSensei(slackNameFromUrl()),
  nickSlack: () => slackNameFromUrl()
})
