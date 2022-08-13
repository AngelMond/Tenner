const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schemas/index')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Your API is runing at: ${url}`);
});