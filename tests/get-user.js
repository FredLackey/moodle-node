const client = require('../src');

// const TEST_USER_ID = 'joeblow';
const TEST_USER_ID = 13;

const main = async () => {
  const user = await client.user.getUser(TEST_USER_ID);
  console.log(user);
};

main();
