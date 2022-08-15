const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Client {
        _id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        username: String!
        email: String!
        password: String!
        suppliers: [Supplier]
    }

    type Supplier {
        _id: ID!
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
        createClient(input: createClientInput!): Client!
        createSupplier(input: createSupplierInput!): Supplier!
    }
`;

module.exports = typeDefs;