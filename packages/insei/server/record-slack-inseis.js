let slack = new Slack(slackAuthToken, autoReconnect = true, autoMark = true)
slack.on('open', () => console.log(Object.keys(slack.users)))

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
;(! Inseis.find().count()) && findInseis.map((insei) => Inseis.insert(insei))
