const slack = new Slack(slackAuthToken, autoReconnect = true, autoMark = true)

updateUser = (currentInfos, newInfos) => {
  const updateInfos = currentInfos
  Object.keys(newInfos).map(field => updateInfos[field] = newInfos[field])
  return updateInfos
}
slack.on('open', () => {
  const slackUsersId = Object.keys(slack.users)
  slackUsersId.map(userId => {
    const user = slack.users[userId]
    console.info(`
      name: ${user.name}
      tz: ${user.tz}
      email: ${user.profile.email}
      skype: ${user.profile.skype}
      firstName: ${user.profile.first_name}
      lastName: ${user.profile.last_name}
      image48: ${user.profile.image_48}
      image192: ${user.profile.image_192}
    `)
  })
})
slack.login()
/*
  id, name, tz, deleted
  profile:
    image_48, image_192, first_name, last_name, skype, email

  league
/*
const findInseis = [
    {firstName: 'Fan', lastName: 'Hui', nickSlack: 'oragefan', role: 'sensei'},
    {firstName: 'Cédric', lastName: 'Cardon', nickSlack: 'darkwolf', role: 'insei'},
    {firstName: 'Davy', lastName: 'Branger', nickSlack: 'davy014', role: 'insei'},
    {firstName: 'Stéphane', lastName: 'Langlois', nickSlack: 'pntbr', role: 'insei'},
    {firstName: 'Florian', lastName: 'Hidalgo', nickSlack: 'florian', role: 'insei'},
    {firstName: 'Théophile', lastName: 'Sers', nickSlack: 'murdin', role: 'insei'},
    {firstName: 'Nicolas', lastName: 'Gaufillet', nickSlack: 'niko', role: 'insei'},
    {firstName: 'Emmanuel', lastName: 'Poidevin', nickSlack: 'ikaru', role: 'insei'},
    {firstName: 'Countchman', lastName: 'Prakash', nickSlack: 'kountch', role: 'insei'},
    {firstName: 'Mathieu', lastName: 'Delli-Zotti', nickSlack: 'shinichi56', role: 'insei'}
]
*/
// ;(! Inseis.find().count()) && findInseis.map((insei) => Inseis.insert(insei))
