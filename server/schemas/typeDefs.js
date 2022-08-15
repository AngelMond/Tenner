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

    type Auth {
        token: ID!
        client: Client
    }

 
    type Query {
        me: Client
        clients: [Client!]!
        client(_id: ID!): Client!
        suppliers: [Supplier!]!
        supplier(_id: ID!): Supplier!
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
        login(email: String! password: String!):Auth
        createClient(input: createClientInput!):Auth
        createSupplier(input: createSupplierInput!): Supplier!
    }
`;

module.exports = typeDefs;