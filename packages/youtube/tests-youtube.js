if (Meteor.isClient) {
  Tinytest.add('Check "pntbr" is member.', (test) =>
    test.isTrue(checkIsMember('pntbr'))
  )
  Tinytest.add('Complete data of stage record, category is Fuseki.', (test) =>
    test.equal(
      completeStageRecord({title: '007-Fuseki-07-12-2015'}).category, 'Fuseki')
  )
  Tinytest.add('Complete data of round record with Tournament.', (test) =>
    test.equal(
      completeStageRecord({title: '001-CAR5-pntbr-kountch-07-12-2015'}).
      category, 'Tournament')
  )
  Tinytest.add('Complete data of round record, black is pntbr.', (test) =>
    test.equal(completeRoundRecord(
      {title: '001-CAR5-pntbr-kountch-07-12-2015'}).blackPlayer, 'pntbr')
  )
  Tinytest.add('Check right comment as title.', (test) =>
    test.isTrue(checkVideoRoundByTitle('001-CAR5-pntbr-kountch-07-12-2015'))
  )
  Tinytest.add('Check bad comment round as not a title.', (test) =>
    test.isFalse(checkVideoRoundByTitle('001-CAR-pntbr-kountch-07-12-2015'))
  )
  Tinytest.add('Check one comment user as not a title.', (test) =>
    test.isFalse(checkVideoRoundByTitle('001-CAR5-kountch-07-12-2015'))
  )
  Tinytest.add('Check -007-Fuseki-07-12-2015- as title.', (test) =>
    test.isTrue(checkVideoStageByTitle('007-Fuseki-07-12-2015'))
  )
  Tinytest.add('Check -007-Juseki-07-12-2015- as not a title.', (test) =>
    test.isFalse(checkVideoStageByTitle('007-Juseki-07-12-2015'))
  )
  Tinytest.add('Check -07-Fuseki-07-12-2015- as not a title.', (test) =>
    test.isFalse(checkVideoStageByTitle('07-Fuseki-07-12-2015'))
  )
  Tinytest.add('Check -007-Fuseki-07-122015- as not a title.', (test) =>
    test.isFalse(checkVideoStageByTitle('007-Fuseki-07-122015'))
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
  Tinytest.add('Extract league in title.', (test) =>
    test.equal(
      leagueByTitle('001-CAR5-pntbr-kountch-07-12-2015'), 'A')
  )
  Tinytest.add('Extract round in title.', (test) =>
    test.equal(
      roundByTitle('001-CAR5-pntbr-kountch-07-12-2015'), 5)
  )
  Tinytest.add('Extract white player in title.', (test) =>
    test.equal(
      whitePlayerByTitle('001-CAR5-pntbr-shishi56-07-12-2015'), 'shishi56')
  )
  Tinytest.add('Extract black player in title.', (test) =>
    test.equal(
      blackPlayerByTitle('001-CAR5-pntbr-shishi56-07-12-2015'), 'pntbr')
  )
  Tinytest.add('Get video_id on youtube data.', (test) => {
    let youtubeData = 'allow_ratings=1&video_id=BMHebTGYS_0&rate=1'
    test.equal(
      queryValueByFieldName('video_id', youtubeData), 'BMHebTGYS_0')
  })
  Tinytest.add('Check if "1234" is not correct.', (test) =>
    test.isFalse(checkVideoIdLength(1234))
  )
  Tinytest.add('Check if "12345678901" is correct.', (test) =>
    test.isTrue(checkVideoIdLength('12345678901'))
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
