import DatabaseFactory from '_services/database/databaseFactory.js'

class Billing {
  constructor() {
    console.log(DatabaseFactory.getDataBase())
  }
}

export default Billing