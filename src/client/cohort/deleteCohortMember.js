const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_delete_cohort_members';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const deleteCohortMember = async ({cohort, user}) => {

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  url += `&members[0][cohortid]=${cohort}`;
  url += `&members[0][userid]=${user}`;

  console.log(url);
  console.log('')

  const response = await _.doPost(url);
  return response;
};

module.exports = deleteCohortMember;
