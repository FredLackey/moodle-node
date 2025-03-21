const _ = require('cleaner-node');

const FUNCTION = 'core_course_get_categories';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCourses = async () => {
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  const response = await _.doPost(url, {});
  return response;
};

module.exports = getCourses;