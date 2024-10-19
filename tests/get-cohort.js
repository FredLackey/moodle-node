const client = require('../src');

// const TEST_COHORT_ID = 6;
// const TEST_COHORT_ID = 'fdsa';
const TEST_COHORT_ID = 'test cohort';

const main = async () => {
  const cohort = await client.cohort.getCohort(TEST_COHORT_ID);
  console.log(cohort);
};

main();
