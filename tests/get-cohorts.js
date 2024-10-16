const client = require('../src');

const main = async () => {
  const cohorts = await client.cohort.getCohorts();
  console.log(cohorts);
};

main();
