const Base = require('./Base.js')

module.exports = class Categorys extends Base {
  constructor(database, ref) {
    super(database)

    if (ref) this.ref = ref
    else this.ref = this.database.ref('System/')
  }

  async onceFunction() {
    const result = await this.ref.once('value')
    this.data = result.val()
    return super.onceFunction()
  }
}
