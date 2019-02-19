'use strict';
const { graphql } = require('graphql');
const schema = require('./src/schema');
module.exports = {
  api: async (event, context, callback) => {
    try {
      const requestString = JSON.parse(event.body).query;
      const rootValue = null;
      const contextValue = { jwtToken: event.headers.Authorization };
      const variableValues = JSON.parse(event.body).variables;
      const operationName = null
      
      const result = await graphql(
        schema,
        requestString,
        rootValue,
        contextValue,
        variableValues,
        operationName,
      );
      
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(result),
      })

    } catch(error) {
      callback(error);
    }
  }
}
