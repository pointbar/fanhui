YoutubeTitle = class {
  constructor(title) {
    this.title = title
  }
  _getColorPlayers(title) {
    return title.match(/^\d{3}-\w*-(\w*\.\w*|\w*)-(\w*\.\w*|\w*)/)
  }
  getBlackPlayer() {
    return this._getColorPlayers(this.title)[1]
  }
  getWhitePlayer() {
    return this._getColorPlayers(this.title)[2]
  }
  getDate() {
    const [day, month, year] =
      this.title.match(/\d{2}-\d{2}-\d{4}$/)[0].split('-')
    return new Date(+year, +month - 1, +day)
  }
  getCategory() {
    return  this.title.match(/(?:Joseki)/) && 'Joseki' ||
            this.title.match(/(?:Fuseki)/) && 'Fuseki' ||
            this.title.match(/(?:-C[A-Z]R\d-)/) && 'Tournament' ||
            this.title.match(/(?:-GT\dR\d-)/) && 'Great tournament'
  }
  getLeague() {
    return this.title.match(/-C([A-Z])R\d-/)[1]
  }
  getRank() {
    return +this.title.match(/^\d{3}/)[0]
  }
  getRound() {
    return +this.title.match(/-(C[A-Z]R|GT\dR)(\d)-/)[2]
  }
  getSeason() {
    return +this.title.match(/^\d{3}-GT(\d)/)[1]
  }
  isVideoCourse() {
    return !! this.title.match(/^\d{3}-(?:Joseki|Fuseki)-\d{2}-\d{2}-\d{4}$/)
  }
  isVideoRound() {
    return !! this.title.match(
      /^\d{3}-C[A-Z]R[0-9]-(\w*|\w*\.\w*)-(\w*|\w*\.\w*)-\d{2}-\d{2}-\d{4}$/)
  }
  isVideoGreatTournament() {
    return !! this.title.match(
      /^\d{3}-GT[0-9]R\d-(\w*|\w*\.\w*)-(\w*|\w*\.\w*)-\d{2}-\d{2}-\d{4}$/)
  }
}
