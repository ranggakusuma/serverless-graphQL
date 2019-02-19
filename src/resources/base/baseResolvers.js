const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  Query: {
    appName: () => `Aster ${process.env.NODE_ENV}`,
  },
  Mutation: {
    setAppName: () => 'Ast',
  },
};