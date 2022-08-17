const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Client {
        _id: ID!
        firstName: String
        lastName: String
        age: Int
        username: String!
        email: String!
        password: String!
        suppliers: [Supplier]
    }

    type Supplier {
        _id: ID!
        firstName: String
        lastName: String
        age: Int
        username: String!
        email: String!
        password: String!
        role: String
    }

    type AuthClient {
        token: ID!
        client: Client
    }

    type AuthSupplier {
        token: ID!
        supplier: Supplier
    }

 
    type Query {
        meClient: Client
        clients: [Client!]!
        client(_id: ID!): Client!
        meSupplier: Supplier
        suppliers: [Supplier!]!
        supplier(_id: ID!): Supplier!
    }

    input createClientInput {
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
    }

    input createSupplierInput {
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
        role: String!
    }

    type Mutation {
        loginClient(email: String! password: String!):AuthClient
        createClient(input: createClientInput!):AuthClient
        loginSupplier(email: String! password: String!):AuthSupplier
        createSupplier(input: createSupplierInput!): AuthSupplier
    }
`;

module.exports = typeDefs;