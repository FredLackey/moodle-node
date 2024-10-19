const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_get_cohort_members';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohortMembers = async (id) => {
  
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;

  const data = await _.doPost(url);

  if (_.isValidArray(data, true)) {
    return _.first(data.filter(x => x?.cohortid));
  }

  return data;
};

module.exports = getCohortMembers;
