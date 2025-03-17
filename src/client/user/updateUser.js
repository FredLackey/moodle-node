const _ = require('cleaner-node');

const FUNCTION = 'core_user_update_users';
const TOKEN = process.env.MOODLE_TOKEN;
const BASE_URL = process.env.MOODLE_URL;

/**
 * Validates if a property name and value are valid for Moodle user updates
 * @param {string} key - The property name to validate
 * @param {any} value - The property value to validate
 * @returns {boolean} - True if the property is valid, false otherwise
 */
const isValidProperty = (key, value) => {
  // List of valid properties for Moodle user updates
  const validProperties = [
    'id', 'username', 'auth', 'suspended', 'password', 'firstname', 'lastname',
    'email', 'maildisplay', 'city', 'country', 'timezone', 'description',
    'userpicture', 'firstnamephonetic', 'lastnamephonetic', 'middlename',
    'alternatename', 'interests', 'idnumber', 'institution', 'department',
    'phone1', 'phone2', 'address', 'lang', 'calendartype', 'theme', 'mailformat',
    'customfields', 'preferences'
  ];

  // Check if the key is in the list of valid properties
  if (!validProperties.includes(key)) {
    return false;
  }

  // Special handling for customfields and preferences
  if (key === 'customfields' || key === 'preferences') {
    // These should be arrays of objects with type and value properties
    return Array.isArray(value) && value.every(item => 
      typeof item === 'object' && 
      typeof item.type === 'string' && 
      item.type.trim() !== '' &&
      typeof item.value === 'string'
    );
  }

  // Validate specific property types
  switch (key) {
    case 'id':
    case 'userpicture':
    case 'maildisplay':
    case 'mailformat':
      // These should be integers
      return Number.isInteger(Number(value));
    
    case 'suspended':
      // Suspended should be 0, 1, true, or false
      return value === 0 || value === 1 || value === true || value === false;
    
    case 'email':
      // Basic email validation
      return typeof value === 'string' && /^.+@.+\..+$/.test(value);
    
    default:
      // For string properties, ensure they are strings and not empty
      return typeof value === 'string' && value.trim() !== '';
  }
};

/**
 * Updates a Moodle user's information
 * 
 * Available properties:
 * users[0][id]= int - Required. The user ID
 * users[0][username]= string - Username
 * users[0][auth]= string - Authentication method
 * users[0][suspended]= int - 0 or 1, whether the user is suspended
 * users[0][password]= string - New password
 * users[0][firstname]= string - First name
 * users[0][lastname]= string - Last name
 * users[0][email]= string - Email address (will be converted to lowercase)
 * users[0][maildisplay]= int - Email display preference
 * users[0][city]= string - City
 * users[0][country]= string - Country
 * users[0][timezone]= string - Timezone
 * users[0][description]= string - User description
 * users[0][userpicture]= int - User picture ID
 * users[0][firstnamephonetic]= string - First name phonetic
 * users[0][lastnamephonetic]= string - Last name phonetic
 * users[0][middlename]= string - Middle name
 * users[0][alternatename]= string - Alternate name
 * users[0][interests]= string - Interests
 * users[0][idnumber]= string - ID number
 * users[0][institution]= string - Institution
 * users[0][department]= string - Department
 * users[0][phone1]= string - Phone 1
 * users[0][phone2]= string - Phone 2
 * users[0][address]= string - Address
 * users[0][lang]= string - Language
 * users[0][calendartype]= string - Calendar type
 * users[0][theme]= string - Theme
 * users[0][mailformat]= int - Mail format
 * users[0][customfields][0][type]= string - Custom field type
 * users[0][customfields][0][value]= string - Custom field value
 * users[0][preferences][0][type]= string - Preference type
 * users[0][preferences][0][value]= string - Preference value
 * 
 * @param {Object} params - The parameters for updating a user
 * @param {number} [params.userId] - The user ID (alternative to id)
 * @param {number} [params.id] - The user ID (alternative to userId)
 * @param {string} [params.username] - The username
 * @param {string} [params.auth] - Authentication method
 * @param {boolean|number} [params.suspended] - Whether the user is suspended (true/false or 1/0)
 * @param {string} [params.password] - New password
 * @param {string} [params.firstname] - First name
 * @param {string} [params.lastname] - Last name
 * @param {string} [params.email] - Email address (will be converted to lowercase)
 * @param {number} [params.maildisplay] - Email display preference
 * @param {string} [params.city] - City
 * @param {string} [params.country] - Country
 * @param {string} [params.timezone] - Timezone
 * @param {string} [params.description] - User description
 * @param {number} [params.userpicture] - User picture ID
 * @param {string} [params.firstnamephonetic] - First name phonetic
 * @param {string} [params.lastnamephonetic] - Last name phonetic
 * @param {string} [params.middlename] - Middle name
 * @param {string} [params.alternatename] - Alternate name
 * @param {string} [params.interests] - Interests
 * @param {string} [params.idnumber] - ID number
 * @param {string} [params.institution] - Institution
 * @param {string} [params.department] - Department
 * @param {string} [params.phone1] - Phone 1
 * @param {string} [params.phone2] - Phone 2
 * @param {string} [params.address] - Address
 * @param {string} [params.lang] - Language
 * @param {string} [params.calendartype] - Calendar type
 * @param {string} [params.theme] - Theme
 * @param {number} [params.mailformat] - Mail format
 * @param {Array<Object>} [params.customfields] - Custom fields
 * @param {Array<Object>} [params.preferences] - Preferences
 * @returns {Promise<Object>} - The updated user or response from Moodle
 * @throws {Error} - If required parameters are missing or invalid
 */
const updateUser = async (params) => {
  const {userId, id} = params;

  let url = `${BASE_URL}wsfunction=${FUNCTION}&wstoken=${TOKEN}&moodlewsrestformat=json`;

  // Ensure userId or id is provided (not both)
  if (!userId && !id) {
    throw new Error('Either userId or id must be provided');
  }

  // Add user ID to URL
  if (userId) {
    url += `&users[0][id]=${userId}`;
  } else if (id) {
    url += `&users[0][id]=${id}`;
  }

  // Track invalid properties for error reporting
  const invalidProperties = [];

  // Process all other parameters
  Object.entries(params).forEach(([key, value]) => {
    // Skip userId as it's already handled
    if (key === 'userId' || key === 'id') {
      return;
    }

    // Skip null or undefined values
    if (value === null || value === undefined) {
      return;
    }

    // Validate property before adding to URL
    if (isValidProperty(key, value)) {
      // Handle special cases
      if (key === 'customfields' || key === 'preferences') {
        // Add each custom field or preference to the URL
        value.forEach((item, index) => {
          url += `&users[0][${key}][${index}][type]=${encodeURIComponent(item.type)}`;
          url += `&users[0][${key}][${index}][value]=${encodeURIComponent(item.value)}`;
        });
      }
      // Handle suspended specially to ensure it's 0 or 1
      else if (key === 'suspended') {
        const suspendedValue = value === true || value === 1 ? 1 : 0;
        url += `&users[0][${key}]=${suspendedValue}`;
      } 
      // Handle email to ensure lowercase
      else if (key === 'email') {
        url += `&users[0][${key}]=${encodeURIComponent(value.toString().toLowerCase())}`;
      }
      // Handle all other properties
      else {
        url += `&users[0][${key}]=${encodeURIComponent(value.toString())}`;
      }
    } else {
      // Track invalid properties
      invalidProperties.push({key, value});
    }
  });

  // If there are invalid properties, throw an error
  if (invalidProperties.length > 0) {
    throw new Error(`Invalid properties: ${JSON.stringify(invalidProperties)}`);
  }

  try {
    const response = await _.doPost(url, {});

    if (_.isValidArray(response, false) && _.isValidString(response[0].username)) {
      return response[0];
    }

    return response;
  } catch (error) {
    // Add the URL to the error for debugging
    error.message = `Error updating user: ${error.message}. URL: ${url}`;
    throw error;
  }
};

module.exports = updateUser;