const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_user_preferences';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getUserPreferences = async (id) => {
  let url = `${BASE_URL}/webservice/rest/server.php?wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += `&userid=${id}`;
  const response = await _.doPost(url);
  return response;
};

module.exports = getUserPreferences;