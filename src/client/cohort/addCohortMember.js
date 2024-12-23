const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_add_cohort_members';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const addCohortMember = async (params) => {

  const {id, idnumber, userid, username} = params;

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  // Cohort Selection
  if (_.isDefined(id)) {
    url += `&members[0][cohorttype][type]=id`;
    url += `&members[0][cohorttype][value]=${id}`;
  } else {
    url += `&members[0][cohorttype][type]=idnumber`;
    url += `&members[0][cohorttype][value]=${idnumber}`;
  }

  // User Selection
  if (_.isDefined(userid)) {
    url += `&members[0][usertype][type]=id`;
    url += `&members[0][usertype][value]=${userid}`;
  } else {
    url += `&members[0][usertype][type]=username`;
    url += `&members[0][usertype][value]=${username}`;
  }
  
  // const res = await _.doPost(url, {});
  // if (_.isValidObject(res)) {
  //   return res;
  // }
  // if (_.isValidArray(res)) {
  //   return res[0].u;
  // }

  // return res;
  const response = await _.doPost(url, {});
  return response;
};

module.exports = addCohortMember;
