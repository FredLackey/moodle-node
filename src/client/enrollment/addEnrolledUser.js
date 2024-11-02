const _ = require('cleaner-node');

const FUNCTION = 'enrol_manual_enrol_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const { getRoleId } = require('../resources');

const addEnrolledUser = async ({ courseid, userid, roleid, timestart, timeend, suspend }) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&enrolments[0][roleid]=${getRoleId(roleid)}`;
  url += `&enrolments[0][userid]=${userid}`;
  url += `&enrolments[0][courseid]=${courseid}`;

  url += _.isNumber(timestart) ? `&enrolments[0][timestart]=${timestart}` : '';
  url += _.isDate(timestart) ? `&enrolments[0][timestart]=${_.toEpochTime(timestart)}` : '';

  url += _.isNumber(timeend) ? `&enrolments[0][timeend]=${timeend}` : '';
  url += _.isDate(timeend) ? `&enrolments[0][timeend]=${_.toEpochTime(timeend)}` : '';

  url += ['true', '1', 1].includes(suspend) ? `&enrolments[0][suspend]=1` : '';

  const response = await _.doPost(url);
  return response;
};

module.exports = addEnrolledUser;
