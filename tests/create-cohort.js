const client = require('../src');

const main = async () => {
  const cohort = await client.cohort.createCohort({

    // Category Type
    type: 'id',
    value: '1',

    // Cohort
    idnumber: 'abc123',
    name: 'Cohort abc123',
    description: 'Cohort abc123 description',
    descriptionFormat: 'HTML',
    visible: true,

  });
  console.log(cohort);
};

main();
