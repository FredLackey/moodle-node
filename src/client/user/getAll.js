const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const IGNORE_MESSAGES = [
  `The search key '' is not supported, look at the web service documentation`
]
const getAll = async () => {
  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += '&criteria[0][key]=&criteria[0][value]='
  const response = await _.doPost(url, {});
  if (_.isValidArray(response?.warnings)) {
    response.warnings = response.warnings.filter(x => (x?.message && !IGNORE_MESSAGES.includes(x.message)));
  }
  return response;
};

module.exports = getAll;