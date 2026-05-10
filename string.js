const client = require("./client");

async function init() {
  const result = await client.set("user:4", "rahim", "nx");
  //   await client.expire("user:4", 10);
  //   const result = await client.get("user:4");
  console.log(result);
}

init();
