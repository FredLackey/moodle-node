const client = require('../src');

const main = async () => {
  const user = await client.user.createUser({
    // username: 'joeblow',
    username: 'joeblow@nowhere.com',
    password: 'Pass1234!',
    email: 'joeblow2@nowhere.com',
    firstname: 'Joe',
    lastname: 'Blow'
  });
  console.log(user);
};

main();
