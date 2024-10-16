const client = require('../src');

const TEST_COHORT_ID = 3;

const main = async () => {
  const cohort = await client.cohort.updateCohort({

    id: TEST_COHORT_ID,

    // Category Type
    type: 'id',
    value: '1',

    // Cohort
    idnumber: 'fdsa',
    name: 'New Cohort',
    description: 'This is a new cohort',
    descriptionFormat: 'HTML',
    visible: true,

  });
  console.log(cohort);
};

main();
