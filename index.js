// class 2 practical
// index.js

const moment = require('moment');

const howOld = function howOld(birthday) {
  return moment().diff(birthday, 'years');
};

module.exports = {
  howOld,
};
