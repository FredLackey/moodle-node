const _ = require('cleaner-node');

const FUNCTION = 'core_user_create_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const createUser = async (params) => {

  const {username, password, email, firstname, lastname} = params;

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += username ? `&users[0][username]=${username}` : '';
  url += email ? `&users[0][email]=${email}` : '';
  url += password ? `&users[0][password]=${password}` : '';
  url += firstname ? `&users[0][firstname]=${firstname}` : '';
  url += lastname ? `&users[0][lastname]=${lastname}` : '';

  const response = await _.doPost(url);

  if (_.isValidArray(response, false) && _.isValidString(response[0].username)) {
    return response[0];
  };

  return response;
};

module.exports = createUser;