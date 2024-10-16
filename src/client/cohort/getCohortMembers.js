const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_get_cohort_members';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohortMembers = async (id) => {
  const url = `${BASE_URL}/webservice/rest/server.php?wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;
  const response = await _.doPost(url);
  return response;
};

module.exports = getCohortMembers;
