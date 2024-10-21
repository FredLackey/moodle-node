const client = require('../src');

const TEST_COURSE_ID = 2;

const main = async () => {
  const courses = await client.course.getCourse(TEST_COURSE_ID);
  console.log(courses);
};

main();
