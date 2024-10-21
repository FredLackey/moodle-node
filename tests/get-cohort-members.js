const client = require('../src');

const TEST_COHORT_ID = 6;

const main = async () => {
  const list = await client.cohort.getCohortMembers(TEST_COHORT_ID);
  console.log(list);
};

main();
