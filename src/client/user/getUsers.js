const _ = require('cleaner-node');

const getUser = require('./getUser');

const getUsers = async (ids) => {

  let validIds = [].concat(ids).filter(x => (_.isNumber(x) || _.isDigits(x) || _.isValidString(x)));
  if (!_.isValidArray(validIds)) {
    throw new Error('Invalid ids');
  }
  validIds = _.unique(validIds);
  

  const users = [];
  for (let i = 0; i < validIds.length; i++) {
    const id = validIds[i];
    const user = await getUser(id);
    if (!user?.username) {
      continue;
    }
    if (!users.some(x => x.username === user.username)) {
      users.push(user);
    }
  }

  return users;
};

module.exports = getUsers;