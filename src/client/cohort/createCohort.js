const _ = require('cleaner-node');

const FUNCTION = 'core_cohort_create_cohorts';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

const DESCRIPTION_FORMATS = {
  MOODLE: 0,
  HTML: 1,
  PLAIN: 2,
  MARKDOWN: 4,
};
const getDescriptionFormat = (format) => DESCRIPTION_FORMATS[format];

const createCohort = async (params) => {

  const {name, type, idnumber, value, description} = params;
  const descriptionFormat = getDescriptionFormat(params.descriptionFormat);
  const visible = ['true', '1'].includes(`${params.visible}.trim().toLowerCase()`) ? '1' : '0';

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;
  url += name ? `&cohorts[0][name]=${name}` : '';
  url += idnumber ? `&cohorts[0][idnumber]=${idnumber}` : '';
  url += description ? `&cohorts[0][description]=${description}` : '';
  url += descriptionFormat ? `&cohorts[0][descriptionformat]=${descriptionFormat}` : '';
  url += visible ? `&cohorts[0][visible]=${visible}` : '';
  url += type ? `&cohorts[0][categorytype][type]=${type}` : '';
  url += value ? `&cohorts[0][categorytype][value]=${value}` : '';
  
  const data = await _.doPost(url, {});
  if (_.isValidArray(data, true)) {
    return _.single(data);
  }
  if (_.isValidObject(data)) {
    return data;
  }

  return null;
};

module.exports = createCohort;
