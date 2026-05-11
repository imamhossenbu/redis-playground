const client = require("./client");

async function init() {
  const result = await client.lpush("messages", "one", "two", "three");

  const data = await client.lrange("messages", 0, -1);

  console.log(data);
}

init();
