const _ = require('cleaner-node');

const FUNCTION = 'core_notes_update_notes';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const updateCourseNote = async ({ id, text, format = 'HTML' }) => {

  const PUBLISH_STATE = 'course';
  const FORMATS = {
    MOODLE: 0,
    HTML: 1,
    PLAIN: 2,
    MARKDOWN: 4,
  };
  
  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&notes[0][id]=${id}`;
  url += `&notes[0][text]=${text}`;
  url += `&notes[0][publishstate]=${PUBLISH_STATE}`;
  url += `&notes[0][format]=${FORMATS[format]}`;

  const response = await _.doPost(url);
  return response;
};

module.exports = updateCourseNote;
