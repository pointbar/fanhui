if (Meteor.isClient) {
  Tinytest.add('Check -007-Fuseki-07-12-2015- as title.', (test) =>
    test.isTrue(checkVideoTitle('007-Fuseki-07-12-2015'))
  )
  Tinytest.add('Check -007-Juseki-07-12-2015- as not a title.', (test) =>
    test.isFalse(checkVideoTitle('007-Juseki-07-12-2015'))
  )
  Tinytest.add('Check -07-Fuseki-07-12-2015- as not a title.', (test) =>
    test.isFalse(checkVideoTitle('07-Fuseki-07-12-2015'))
  )
  Tinytest.add('Check -007-Fuseki-07-122015- as not a title.', (test) =>
    test.isFalse(checkVideoTitle('007-Fuseki-07-122015'))
  )
  Tinytest.add('Extract Date in title.', (test) =>
    test.equal(
      dateByTitle('007-Fuseki-07-12-2015'), new Date(2015, 11, 7))
  )
  Tinytest.add('Extract Rank in title.', (test) =>
    test.equal(
      rankByTitle('011-Fuseki-05-11-2015'), 11)
  )
  Tinytest.add('Extract Fuseki in title.', (test) =>
    test.equal(
      categoryByTitle('007-Fuseki-05-11-2015'), 'Fuseki')
  )
  Tinytest.add('Get video_id on youtube data.', (test) => {
    let youtubeData = 'allow_ratings=1&video_id=BMHebTGYS_0&rate=1'
    test.equal(
      queryValueByFieldName('video_id', youtubeData), 'BMHebTGYS_0')
  })
  Tinytest.add('Check if "1234" is not correct.', (test) =>
    test.isFalse(checkVideoIdLength(1234))
  )
  Tinytest.addAsync(
    'Check the "AxRg12345tG" reférence exists in our collection.',
    (test, next) =>
      Meteor.call('isVdoExists', 'AxRg12345tG', (err, result) => {
        test.isTrue(result)
        next()
      })
  )
  Tinytest.addAsync(
    'Check the "12345678901" reférence don\'t exists in collection.',
    (test, next) =>
      Meteor.call('isVdoExists', '12345678901', (err, result) => {
        test.isFalse(result)
        next()
      })
  )
}
