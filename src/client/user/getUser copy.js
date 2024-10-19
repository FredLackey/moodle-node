const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getUser = async (id) => {
  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += `&criteria[0][key]=id&criteria[0][value]=${id}`;
  console.log(url);
  const response = await _.doPost(url);
  console.log(response);
  //return _.single(response);
};

module.exports = getUser;