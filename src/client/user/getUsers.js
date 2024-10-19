const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCourses = async () => {
  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += '&criteria[0][key]=&criteria[0][value]='
  const response = await _.doPost(url);
  return response;
};

module.exports = getCourses;