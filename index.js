const server = require("./api/server");

require("dotenv").config();
console.log(process.env.PORT);

const port = process.env.PORT || 9001;
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
