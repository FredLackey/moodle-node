const _ = require('cleaner-node');

const FUNCTION = 'core_webservice_get_site_info';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const getSiteInfo = async () => {
  const url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  const response = await _.doPost(url, {});
  return response;
};

module.exports = getSiteInfo;