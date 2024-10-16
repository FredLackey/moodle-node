const client = require('../src');

const main = async () => {
  const courses = await client.course.getCourses();
  console.log(courses);
};

main();
