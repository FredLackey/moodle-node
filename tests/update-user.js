const client = require('../src');

const NEW_USER_EMAIL = 'kisalya.pathak@treasury.gov';
const TEST_USER_EMAIL = 'updated.kisalya.pathak@treasury.gov';

const main = async () => {

  let allUsers = await client.user.getAll();
  if (!allUsers.users) {
    console.error('No users found (invalid response)');
    process.exit(1);
  }
  if (allUsers.users.length === 0) {
    console.error('No users found');
    process.exit(1);
  } else {
    console.log(`Found ${allUsers.users.length} users`);
  }

  let user = allUsers.users.find(x => x.email === TEST_USER_EMAIL);
  if (!user) {
    console.error('User not found');
    process.exit(1);
  } else {
    console.log(`Found user ${user.id} with email ${user.email}`);
  }

  updatedUser = await client.user.updateUser({
    id: user.id,
    email: NEW_USER_EMAIL,
  });

  if (updatedUser !== null) {
    console.error('User not updated');
    process.exit(1);
  } else {
    console.log('User updated successfully');
  }

  allUsers = await client.user.getAll();
  user = allUsers.users.find(x => x.email === NEW_USER_EMAIL);
  if (!user) {
    console.error('User not found with new email');
    process.exit(1);
  } else {
    console.log(`Found user ${user.id} with email ${user.email}`);
  }

  // Restore the original email
  updatedUser = await client.user.updateUser({
    id: user.id,
    email: TEST_USER_EMAIL,
  });

  if (updatedUser !== null) {
    console.error('User not updated to original email');
    process.exit(1);
  } else {
    console.log('User updated successfully');
  }

};

main();
