getInseiBySlackName = (slackName) => Inseis.findOne({slack_name: slackName})

isInsei = (slackName) => {
  const insei = getInseiBySlackName(slackName)
  return (typeof insei !== 'undefined')
}

isSensei = (slackName) => {
  const insei = getInseiBySlackName(slackName)
  return (typeof insei !== 'undefined') ? insei.slack_is_admin : false
}

nickSlackFromUrl = () => document.location.href.split('/').pop()
