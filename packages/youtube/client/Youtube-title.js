YoutubeTitle = class {
  constructor(title) {
    this.title = title
  }
  getBlackPlayer() {
    return this.title.match(/-C[A-Z]R\d-(\w*)-/)[1]
  }
  getDate() {
    const [day, month, year] =
      this.title.match(/\d{2}-\d{2}-\d{4}$/)[0].split('-')
    return new Date(+year, +month - 1, +day)
  }
  getCategory() {
    return  this.title.match(/(?:Joseki)/) && 'Joseki' ||
            this.title.match(/(?:Fuseki)/) && 'Fuseki' ||
            this.title.match(/(?:-C[A-Z]R\d-)/) && 'Tournament'
  }
  getLeague() {
    return this.title.match(/-C([A-Z])R\d-/)[1]
  }
  getRank() {
    return +this.title.match(/^\d{3}/)[0]
  }
  getRound() {
    return +this.title.match(/-C[A-Z]R(\d)-/)[1]
  }
  getWhitePlayer() {
    return this.title.match(/-C[A-Z]R\d-\w*-(\w*)-/)[1]
  }
  isVideoCourse() {
    return this.title.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}$/)
  }
  isVideoRound() {
    return this.title.match(/^\d{3}-C[A-Z]R[0-9]-.*-.*-\d{2}-\d{2}-\d{4}$/)
  }
}
