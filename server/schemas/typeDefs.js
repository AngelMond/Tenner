const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Client {
        _id: ID!
        firstName: String
        lastName: String
        username: String!
        email: String!
        password: String!
        suppliers: [Supplier]
    }

    type Supplier {
        _id: ID!
        firstName: String
        lastName: String
        username: String!
        email: String!
        password: String!
        role: String
        card: [Card]
    }

    type Card {
        _id: ID!
        description: String
        price: Int
        image: String
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
        username: String!
        email: String!
        password: String!
    }

    input createSupplierInput {
        username: String!
        email: String!
        password: String!
    }

    type Mutation {
        loginClient(email: String! password: String!):AuthClient
        createClient(input: createClientInput!):AuthClient
        loginSupplier(email: String! password: String!):AuthSupplier
        createSupplier(input: createSupplierInput!): AuthSupplier
    }
`;

module.exports = typeDefs;