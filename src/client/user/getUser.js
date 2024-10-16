const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getUser = async (id) => {
  let url = `${BASE_URL}/webservice/rest/server.php?wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += `&criteria[0][key]=id&criteria[0][value]=${id}`;
  const response = await _.doPost(url);
  return _.single(response);
};

module.exports = getUser;