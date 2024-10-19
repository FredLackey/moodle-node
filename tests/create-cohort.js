const client = require('../src');

const main = async () => {
  const user = await client.cohort.createCohort({

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
  console.log(user);
};

main();
