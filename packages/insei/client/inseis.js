getInseiWithNickSlack = (nickSlack) => {
  Meteor.subscribe('inseis')
  return Inseis.findOne({nickSlack: nickSlack})
}

isInsei = (nickSlack) => {
  const user = getInseiWithNickSlack(nickSlack)
  return (typeof user !== 'undefined')
}

isSensei = (nickSlack) => {
  const user = getInseiWithNickSlack(nickSlack)
  return (typeof user !== 'undefined') ? user.role === 'sensei' : false
}

nickSlackFromUrl = () => document.location.href.split('/').pop()
