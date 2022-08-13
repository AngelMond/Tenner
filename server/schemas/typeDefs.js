const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Client {
        id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
        suppliers: [Supplier]
    }

    type Supplier {
        id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
        role: String!
    }

    type Images {
        id: ID!
        profile: String!
        content: String!
    }
 
    type Query {
        clents: [Client!]!
        client(id: ID!): User
    }
`;

module.exports = typeDefs;