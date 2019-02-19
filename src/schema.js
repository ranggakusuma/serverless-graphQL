const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const fs = require('fs');
const path = require('path');

const resourcePath = path.join(__dirname, '/resources');
const resource = fs
  .readdirSync(resourcePath)
  .filter(dir => dir !== '_template')
  .map(dir => require(path.join(resourcePath, dir)));

const executableSchema = makeExecutableSchema({
  typeDefs: resource.map(r => r.typeDefs),
  resolvers: merge(...resource.map(r => r.resolvers))
})

module.exports = executableSchema

