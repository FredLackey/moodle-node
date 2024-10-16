const client = require('../src');

const TEST_USER_ID = 5;

const main = async () => {
  const user = await client.user.getUserPreferences(TEST_USER_ID);
  console.log(user);
};

main();
