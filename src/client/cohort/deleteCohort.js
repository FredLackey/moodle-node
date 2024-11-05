const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_delete_cohorts';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const deleteCohort = async (id) => {

  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;

  const response = await _.doPost(url, {});
  return response;
};

module.exports = deleteCohort;
