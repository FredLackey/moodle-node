const _          = require('cleaner-node');
const getCohorts = require('./getCohorts');

const FUNCTION = 'core_cohort_get_cohorts';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohort = async (id) => {

  if (_.isNumber(id)) {
    const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;
    const response = await _.doPost(url, {});
    return _.single(response);
  }

  if (_.isValidString(id)) {
    const cohorts = await getCohorts();
    const cohort = [].concat(cohorts).find(x => (
      x.name.trim().toLowerCase() === id.toLowerCase() ||
      x.idnumber.trim().toLowerCase() === id.toLowerCase()
    ));
    return cohort;
  }

  return null;

};

module.exports = getCohort;
