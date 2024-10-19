const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_get_cohorts';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohort = async (id) => {
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;
  const response = await _.doPost(url);
  return _.single(response);
};

module.exports = getCohort;
