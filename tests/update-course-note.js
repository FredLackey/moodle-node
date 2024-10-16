const client = require('../src');

const TEST_NOTE_ID = 1;
const TEST_TEXT = 'This is an UPDATED test note';

const main = async () => {
  const cohort = await client.course.updateCourseNote({
    id: TEST_NOTE_ID,
    text: TEST_TEXT,
  });
  console.log(cohort);
};

main();
