const client = require('../src');

const main = async () => {
  const users = await client.user.getAll();
  console.log(users);
};

main();
