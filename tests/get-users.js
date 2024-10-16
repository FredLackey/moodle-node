const client = require('../src');

const main = async () => {
  const users = await client.user.getUsers();
  console.log(users);
};

main();
