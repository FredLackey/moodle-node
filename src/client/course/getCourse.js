const _ = require('cleaner-node');

const FUNCTION = 'core_course_get_courses';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCourse = async (id) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&options[ids][0]=${id}`;

  const response = await _.doPost(url);

  return _.isValidArray(response) ? _.first(response) : response;
};

module.exports = getCourse;