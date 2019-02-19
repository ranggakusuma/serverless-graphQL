const graphqlFileLoader = require('../../utils/graphqlFileLoader');
const resolvers = require('./baseResolvers');

module.exports = {
  typeDefs: graphqlFileLoader('base/base.graphql'),
  resolvers
}