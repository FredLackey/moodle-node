const client = require('../src');

const TEST_COURSE_ID = 2;
const TEST_USER_ID = 5;
const TEST_TEXT = 'This is a test note';

const main = async () => {
  const cohort = await client.course.addCourseNote({
    courseid: TEST_COURSE_ID,
    userid: TEST_USER_ID,
    text: TEST_TEXT,
  });
  console.log(cohort);
};

main();
