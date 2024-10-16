const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_get_cohorts';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohorts = async () => {
  let url = `${BASE_URL}/webservice/rest/server.php?wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  const response = await _.doPost(url);
  return response;
};

module.exports = getCohorts;
