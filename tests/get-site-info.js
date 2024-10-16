const client = require('../src');

const main = async () => {
  const siteInfo = await client.site.getSiteInfo();
  console.log(siteInfo);
};

main();
