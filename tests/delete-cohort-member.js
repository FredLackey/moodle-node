const client = require('../src');

const TEST_COHORT_ID = 6;
const TEST_USER_ID = 13;

const main = async () => {
  const cohort = await client.cohort.deleteCohortMember({
    cohort: TEST_COHORT_ID,
    user: TEST_USER_ID,
  });
  console.log(cohort);
};

main();
