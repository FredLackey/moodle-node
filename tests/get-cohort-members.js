const client = require('../src');

const TEST_COHORT_ID = 5;

const main = async () => {
  const cohort = await client.cohort.getCohortMembers(TEST_COHORT_ID);
  console.log(cohort);
};

main();