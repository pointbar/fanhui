SlackInseis = class {
  constructor(slackUsersJson)  {
    this._slackUsersJson = slackUsersJson
    this.slackIds = Object.keys(slackUsersJson)
  }
  _isBot(slackId) {
    return slackId.match(/(USLACKBOT|U0HJBNLLE)/)
  }
  _getInfosBySlackId(slackId) {
    return this._slackUsersJson[slackId]
  }
  slackIdsWithoutBots() {
    return this.slackIds.filter(slackId => ! this._isBot(slackId))
  }
  getRelevantInfosBySlackId(slackId) {
    const slackInfos = this._getInfosBySlackId(slackId)
    return {
      slack_id: slackId,
      slack_name: slackInfos.name,
      slack_is_admin: slackInfos.is_admin,
      slack_tz: slackInfos.tz,
      slack_firstName: slackInfos.profile.first_name,
      slack_lastName: slackInfos.profile.last_name,
      slack_skype: slackInfos.profile.skype,
      slack_email: slackInfos.profile.email,
      slack_image48: slackInfos.profile.image_48,
      slack_image192: slackInfos.profile.image_192
    }
  }
  updateInfos(currentInfos, newInfos) {
    const updateInfos = currentInfos
    Object.keys(newInfos).map(field => updateInfos[field] = newInfos[field])
    updateInfos.updated = new Date()
    return updateInfos
  }
  addDefault(newInfos) {
    const newAndDefaultInfos = {
      created: new Date(),
      league: '?'
    }
    Object.keys(newInfos).
      map(field => newAndDefaultInfos[field] = newInfos[field])
    return newAndDefaultInfos
  }
}
