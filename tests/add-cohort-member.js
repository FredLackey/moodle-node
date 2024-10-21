const client = require('../src');

const TEST_COHORT_ID = 6;
const TEST_COHORT_IDNUMBER = 'fdsa';

const TEST_USER_ID = 13;
const TEST_USER_USERNAME = 'test@nowhere.com';

const main = async () => {
  const cohort = await client.cohort.addCohortMember({
    id: TEST_COHORT_ID,
    // idnumber: TEST_COHORT_IDNUMBER,
    userid: TEST_USER_ID,
    // username: TEST_USER_USERNAME,
  });
  console.log(cohort);
};

main();
