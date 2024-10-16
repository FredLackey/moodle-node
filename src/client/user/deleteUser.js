const _ = require('cleaner-node');

const FUNCTION = 'core_user_delete_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const deleteUser = async (id) => {
  let url = `${BASE_URL}/webservice/rest/server.php?wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += `&userids[0]=${id}`;
  const response = await _.doPost(url);
  return response;
};

module.exports = deleteUser;