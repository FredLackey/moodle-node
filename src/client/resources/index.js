const _ = require('cleaner-node');
const constants = require('./constants');

const getRoles = () => {
  return constants.ROLES;
}
const getRoleId = (value) => {
  if (_.isNumber(value) || _.isDigits(value)) {
    return Number(value);
  }
  if (_.isValidString(value) && (_.isAlpha(value) || value.includes('_'))) {
    return constants.ROLES[value.trim().toUpperCase()];
  }
  return null;
};
const getRoleName = (id) => Object.keys(constants.ROLES).find(key => constants.ROLES[key] === id);

module.exports = {
  getRoles,
  getRoleId,
  getRoleName
}
