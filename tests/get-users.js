const client = require('../src');

// const ids = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]
const ids = [
  'joeblow',
  'student@nowhere.com'
]

const main = async () => {
  const users = await client.user.getUsers(ids);
  console.log(users);
};

main();
