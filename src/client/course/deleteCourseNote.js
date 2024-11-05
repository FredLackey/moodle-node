const _ = require('cleaner-node');

const FUNCTION = 'core_notes_delete_notes';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const deleteCourseNote = async (id) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&notes[0]=${id}`;

  const response = await _.doPost(url, {});
  return response;
};

module.exports = deleteCourseNote;
