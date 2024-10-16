const client = require('../src');

const TEST_USER_ID = 5;

const main = async () => {
  const user = await client.user.getUserCourses(TEST_USER_ID);
  console.log(user);
};

main();
