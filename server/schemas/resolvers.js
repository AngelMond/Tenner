const {Client, Supplier} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async () => {
            if(context.client){
                return Client.findOne({ _id: context.client._id });
            }

            if(context.supplier){
                return Supplier.findOne({ _id: context.supplier._id });
            }

            throw new AuthenticationError('Account not found');
        },
        clients: async () => {
            return await Client.find({});
        },
        client: async (parent, args) => {
            const {_id} = args;
            const client = await Client.findById({_id});

            return client;
        },
        suppliers: async () => {
            return await Supplier.find({});
        },
        supplier: async (parent, args) => {
            const {_id} = args;
            const supplier = await Supplier.findById({_id});

            return supplier;
        },
        images: () => {
            return imagesList;
        },
        image: (parent, args) => {
            const id = args.id;
            const image = _.find(imagesList, {id: Number(id)});

            return image;
        }
    },
    Client: {
        suppliers: () => {
            return _.filter(supplierList, (supplier) => {
               return supplier.id >= 5
            })
        }
    },
    Mutation: {
        createClient: async (parent, args) => {
            const {input} = args;
            const client = await Client.create(input);
            const token = signToken(client);

            return {token, client};
        },
        createSupplier: async (parent, args) => {
            const {input} = args;
            const supplier = await Supplier.create(input);
            const token = signToken(supplier);

            return {token, supplier};
        },
        loginClient: async (parent, {email, password}) => {
            const client = await Client.findOne({email});

            if(!client){
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await client.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Invalid Password');
            }

            const token = signToken(client);

            return {token, client};
        },
        loginSupplier: async (parent, {email, password}) => {
            const supplier = await Supplier.findOne({email});

            if(!supplier){
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await supplier.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Invalid Password');
            }

            const token = signToken(supplier);

            return {token, supplier};
        }
    }
}

module.exports = resolvers;

