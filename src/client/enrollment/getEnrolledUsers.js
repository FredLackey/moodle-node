const _ = require('cleaner-node');

const FUNCTION = 'core_enrol_get_enrolled_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getEnrolledUsers = async (id) => {
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&courseid=${id}`;
  const response = await _.doPost(url);
  return response;
};

module.exports = getEnrolledUsers;
