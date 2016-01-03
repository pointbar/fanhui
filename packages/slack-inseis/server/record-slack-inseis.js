const slack = new Slack(slackAuthToken, autoReconnect = true, autoMark = true)

updateInseisWithSlack = (slackUsersJson) => {
  const slackInseis = new SlackInseis(slackUsersJson)
  slackInseis.slackIdsWithoutBots().map(slackId => {
    const insei = Inseis.findOne({slack_id: slackId})
    const slackInsei = slackInseis.getRelevantInfosBySlackId(slackId)
    if (!! insei)
      Inseis.update(insei._id, slackInseis.updateInfos(insei, slackInsei))
    else
      Inseis.insert(slackInseis.addDefault(slackInsei))
  })
}

Meteor.methods({
  updateSlackInfos: () => {
    slack.on('open', Meteor.bindEnvironment(() => {
      updateInseisWithSlack(slack.users)
      console.info('Slack updated')
    }))
    slack.login()
  }
})
