const graphqlFileLoader = require('../../utils/graphqlFileLoader');
const resolvers = require('./tryResolvers');

const typeDefs = graphqlFileLoader('try/try.graphql');
// console.log(typeDefs)
module.exports = {
  typeDefs,
  resolvers
}