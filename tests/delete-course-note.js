const client = require('../src');

const TEST_NOTE_ID = 3;

const main = async () => {
  const cohort = await client.course.deleteCourseNote(TEST_NOTE_ID);
  console.log(cohort);
};

main();
