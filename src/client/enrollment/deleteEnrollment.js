const _ = require('cleaner-node');

const FUNCTION = 'enrol_manual_unenrol_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const deleteEnrollment = async ({courseid, userid}) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&enrolments[0][courseid]=${courseid}`;
  url += `&enrolments[0][userid]=${userid}`;

  console.log(url);
  console.log('')

  const response = await _.doPost(url);
  return response;
};

module.exports = deleteEnrollment;
