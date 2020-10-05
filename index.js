const server = require("./apis/server");

const PORT = 4000

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});