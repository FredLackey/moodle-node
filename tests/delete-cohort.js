const client = require('../src');

const TEST_COHORT_ID = 4;

const main = async () => {
  const cohort = await client.cohort.deleteCohort(TEST_COHORT_ID);
  console.log(cohort);
};

main();
