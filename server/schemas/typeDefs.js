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
        clients: [Client!]!
        client(id: ID!): Client!
        suppliers: [Supplier!]!
        supplier(id: ID!): Supplier!
        images: [Images!]!
        image(id: ID!): Images!
    }
    input createClientInput {
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
    }

    type Mutation {
        createClient(input: createClientInput!): Client!
    }
`;

module.exports = typeDefs;