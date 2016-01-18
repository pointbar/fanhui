const fusekiTitle = new YoutubeTitle('007-Fuseki-07-12-2015')
const roundTitle = new YoutubeTitle('001-CAR5-pntbr-kountch.kgs-07-12-2015')
const greatTournamentTitle =
  new YoutubeTitle('001-GT5R3-pntbr.kgs-kountch-07-12-2015')
let badCourseTitle
let badRoundTitle

Tinytest.add('Extract Date in title.', (test) => {
  test.equal(
    fusekiTitle.getDate(), new Date(2015, 11, 7))
})
Tinytest.add('Extract black player in title.', (test) =>
  test.equal(
    roundTitle.getBlackPlayer(), 'pntbr')
)
Tinytest.add('Extract Fuseki in title.', (test) =>
  test.equal(
    fusekiTitle.getCategory(), 'Fuseki')
)
Tinytest.add('Extract league in title.', (test) =>
  test.equal(
    roundTitle.getLeague(), 'A')
)
Tinytest.add('Extract Rank in title.', (test) =>
  test.equal(
    fusekiTitle.getRank(), 7)
)
Tinytest.add('Extract round in title.', (test) =>
  test.equal(
    roundTitle.getRound(), 5)
)
Tinytest.add('Extract white player in title.', (test) =>
  test.equal(
    roundTitle.getWhitePlayer(), 'kountch.kgs')
)
Tinytest.add('Check right comment as title.', (test) =>
  test.isTrue(roundTitle.isVideoRound())
)
Tinytest.add('Check bad comment round as not a title.', (test) => {
  badRoundTitle = new YoutubeTitle('001-CAR-pntbr-kountch-07-12-2015')
  test.isFalse(badRoundTitle.isVideoRound())
})
Tinytest.add('Check one comment user as not a title.', (test) => {
  badCourseTitle = new YoutubeTitle('001-CAR5-kountch-07-12-2015')
  test.isFalse(badCourseTitle.isVideoRound())
})
Tinytest.add('Check -007-Fuseki-07-12-2015- as title.', (test) =>
  test.isTrue(fusekiTitle.isVideoCourse())
)
Tinytest.add('Check -007-Juseki-07-12-2015- as not a title.', (test) => {
  badCourseTitle = new YoutubeTitle('007-Juseki-07-12-2015')
  test.isFalse(badCourseTitle.isVideoCourse())
})
Tinytest.add('Check -07-Fuseki-07-12-2015- as not a title.', (test) => {
  badCourseTitle = new YoutubeTitle('07-Fuseki-07-12-2015')
  test.isFalse(badCourseTitle.isVideoCourse())
})
Tinytest.add('Check -007-Fuseki-07-122015- as not a title.', (test) => {
  badCourseTitle = new YoutubeTitle('007-Fuseki-07-122015')
  test.isFalse(badCourseTitle.isVideoCourse())
})
Tinytest.add('Check is Great Tournament title is correct.', (test) =>
  test.isTrue(greatTournamentTitle.isVideoGreatTournament())
)
Tinytest.add('Check is invalid Great Tournament title is false.', (test) => {
  badGreatTournamentTitle =
    new YoutubeTitle('001-GTR5-pntbr.kgs-kountch-07-12-2015')
  test.isFalse(badGreatTournamentTitle.isVideoGreatTournament())
})
