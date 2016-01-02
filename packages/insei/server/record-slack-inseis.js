const slack = new Slack(slackAuthToken, autoReconnect = true, autoMark = true)

updateInseisWithSlack = (slackUsers) => {
  const slackUsersId = Object.keys(slackUsers)
  slackUsersId.map(userId => {
    const insei = new Insei(userId)
    const slackInsei = slackUsers[userId]
    const newData = {
      slack_id: userId,
      slack_name: slackInsei.name,
      slack_tz: slackInsei.tz,
      slack_firstName: slackInsei.profile.first_name,
      slack_lastName: slackInsei.profile.last_name,
      slack_skype: slackInsei.profile.skype,
      slack_email: slackInsei.profile.email,
      slack_image48: slackInsei.profile.image_48,
      slack_image192: slackInsei.profile.image_192
    }
    if (userId.match(/(USLACKBOT|U0HJBNLLE)/))
      return
    if (!! insei.getBySlackId(userId))
      insei.updateRecord(insei.updateInfos(insei.getBySlackId(userId), newData))
    else
      insei.createRecord(insei.addDefault(newData))
  })
}

slack.on('open', Meteor.bindEnvironment(() => {
  updateInseisWithSlack(slack.users)
}))
slack.login()
