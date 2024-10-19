const _ = require('cleaner-node');

const FUNCTION = 'core_user_get_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getUser = async (id) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  if (_.isNumber(id) || _.isDigits(id)) {
    url += `&criteria[0][key]=id&criteria[0][value]=${id}`;
  } else if (_.isValidString(id)) {
    url += `&criteria[0][key]=username&criteria[0][value]=${id}`;
  }
  const response = await _.doPost(url);

  if (_.isValidArray(response?.users, true)) {
    return _.first(response.users);
  };

  return response;
};

module.exports = getUser;