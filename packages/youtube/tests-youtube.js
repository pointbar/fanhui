Tinytest.add('Complete data of course record, category is Fuseki.', (test) =>
  test.equal(
    completeCourseRecord({title: '007-Fuseki-07-12-2015'}).category, 'Fuseki')
)
Tinytest.add('Complete data of round record with Tournament.', (test) =>
  test.equal(
    completeRoundRecord({title: '001-CAR5-pntbr-kountch-07-12-2015'}).
    category, 'Tournament')
)
Tinytest.add('Complete data of round record, black is pntbr.', (test) =>
  test.equal(completeRoundRecord(
    {title: '001-CAR5-pntbr-kountch-07-12-2015'}).blackPlayer, 'pntbr')
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

