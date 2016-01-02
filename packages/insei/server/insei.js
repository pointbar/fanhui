Insei = class {
  constructor(slackId = '')  {
    this.slackId = slackId
  }
  createRecord(infos) {
    return Inseis.insert(infos)
  }
  updateRecord(infos) {
    return Inseis.update(infos._id, infos)
  }
  isExist() {
    return !! this.currentInfos
  }
  getBySlackId(id) {
    return Inseis.findOne({slack_id: id})
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
      league: '?',
      role: 'insei'
    }
    if (newInfos.slack_name === 'oragefan')
      newAndDefaultInfos.role = 'sensei'
    Object.keys(newInfos).
      map(field => newAndDefaultInfos[field] = newInfos[field])
    return newAndDefaultInfos
  }
}
