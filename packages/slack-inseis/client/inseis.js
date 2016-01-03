getInseiBySlackName = (slackName) => {
  Meteor.subscribe('inseis')
  return Inseis.findOne({slack_name: slackName})
}

isInsei = (slackName) => {
  const insei = getInseiBySlackName(slackName)
  return (typeof insei !== 'undefined')
}

isSensei = (slackName) => {
  const insei = getInseiBySlackName(slackName)
  return (typeof insei !== 'undefined') ? insei.slack_is_admin : false
}

slackNameFromUrl = () => {
  const slackNameFromUrl = document.location.href.split('/').pop()
  return isInsei(slackNameFromUrl) ? slackNameFromUrl : 'guest'
}
