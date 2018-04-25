
const DB_CONFIG = {
  apiKey:           "AIzaSyA9RmCDA4eo0BeCcmc0wUb2rh32A0ioCmk",
  authDomain:       "my-money-app-c5cbe.firebaseapp.com",
  databaseURL:       "https://my-money-app-c5cbe.firebaseio.com",
  projectId:         "my-money-app-c5cbe",
  storageBucket:     "",
  messagingSenderId: "568289331122"
};

class DatabaseFactory {
  constructor() {
    this.firebase = firebase.initializeApp(DB_CONFIG)
  }

  getDataBase() {
    try {
      return this.firebase;
    } catch (error) {
      console.error('databaseFactory.gerDatabase', error)
    }
  }
}

export default new DatabaseFactory();
