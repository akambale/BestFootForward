const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';
module.exports = {
  APP_SECRET,
  getUserID: context => {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
      const token = Authorization.replace('Bearer ', '');
      const { userID } = jwt.verify(token, APP_SECRET);
      return userID;
    }
    throw new Error('Not authenticated');
  },
  convertToEpoch: str => {
    const time = new Date(str);
    return Math.floor(time.getTime() / 1000);
  },
  getMinAdultBirthday: () => {
    const eighteenYearsInSeconds = 567648000;
    const time = new Date();
    const timeInSeconds = Math.floor(time.getTime() / 1000);
    return timeInSeconds - eighteenYearsInSeconds;
  },
  getCurrentTime: () => {
    const time = new Date();
    return Math.floor(time.getTime() / 1000);
  },
};
