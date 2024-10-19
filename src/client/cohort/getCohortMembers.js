const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_get_cohort_members';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getCohortMembers = async (id) => {
  
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json&cohortids[0]=${id}`;

  const data = await _.doPost(url);
  if (data?.message) {
    console.error(`Error fetching cohort members: ${id}`, data.message);
    return [];
  }
  if (!_.isValidObject(data)) {
    return null;
  }

  if (_.isValidArray(data?.userids, true)) {
    return data.userids;
  }

  return data;
};

module.exports = getCohortMembers;
