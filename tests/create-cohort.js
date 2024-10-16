const client = require('../src');

const main = async () => {
  const user = await client.cohort.createCohort({

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
  console.log(user);
};

main();
