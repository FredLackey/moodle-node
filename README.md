# moodle-node

Manage Moodle from NodeJS


## Installation

```bash
npm install moodle-node
```

## Usage

```javascript
const moodle = require('moodle-node');

const user = await moodle.user.createUser({
  username: 'joeblow',
  password: 'Pass1234!',
  email: 'joeblow@nowhere.com',
  firstname: 'Joe',
  lastname: 'Blow',
});
console.log(user);

```

## Output

The output is a JSON object or array based on the function called:

```json
[ 
  { 
    "id": 7, 
    "username": "joeblow" 
  } 
]
```

## Contact Information

If you ever need a hand or have any questions, feel free to reach out.  

**Fred Lackey**  
[https://fredlackey.com](https://fredlackey.com)  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  