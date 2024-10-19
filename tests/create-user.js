const client = require('../src');

const main = async () => {
  const user = await client.user.createUser({
    username: 'joeblow',
    password: 'Pass1234!',
    email: 'joeblow@nowhere.com',
    firstname: 'Joe',
    lastname: 'Blow'
  });
  console.log(user);
};

main();
