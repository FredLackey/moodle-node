const client = require('../src');

const TEST_COURSE_ID = 2;

const main = async () => {
  const cohort = await client.enrollment.getEnrolledUsers(TEST_COURSE_ID);
  console.log(cohort);
};

main();
