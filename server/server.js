const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const app = express();

PORT = 3003;
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: authMiddleware
});



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

    db.once('open', () => {
      app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });

};

startApolloServer(typeDefs, resolvers);