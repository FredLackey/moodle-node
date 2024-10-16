const client = require('../src');

const TEST_COHORT_ID = 5;
const TEST_USER_ID = 5;

const main = async () => {
  const cohort = await client.cohort.deleteCohortMember({
    cohort: TEST_COHORT_ID,
    user: TEST_USER_ID,
  });
  console.log(cohort);
};

main();
