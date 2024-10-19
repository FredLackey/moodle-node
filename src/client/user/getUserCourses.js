const _ = require('cleaner-node');

const FUNCTION = 'core_enrol_get_users_courses';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getUserCourses = async (id) => {
  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += `&userid=${id}`;
  const response = await _.doPost(url);
  return response;
};

module.exports = getUserCourses;