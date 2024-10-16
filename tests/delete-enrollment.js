const client = require('../src');

const TEST_COURSE_ID = 2;
const TEST_USER_ID = 5;

const main = async () => {
  const cohort = await client.enrollment.deleteEnrollment({
    courseid: TEST_COURSE_ID,
    userid: TEST_USER_ID,
  });
  console.log(cohort);
};

main();
