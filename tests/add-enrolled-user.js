const client = require('../src');

const TEST_COURSE_ID = 2;
const TEST_USER_ID = 5;
const TEST_ROLE_ID = 5;

const main = async () => {
  const cohort = await client.enrollment.addEnrolledUser({
    courseid: TEST_COURSE_ID,
    userid: TEST_USER_ID,
    roleid: TEST_ROLE_ID,
  });
  console.log(cohort);
};

main();
