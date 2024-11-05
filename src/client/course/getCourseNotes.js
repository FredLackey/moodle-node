const _ = require('cleaner-node');

const FUNCTION = 'core_notes_get_course_notes';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCourseNotes = async (courseid) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&courseid=${courseid}`;

  const response = await _.doPost(url, {});
  return response?.coursenotes;
};

module.exports = getCourseNotes;