const {Client, Supplier} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        meClient: async (parent, args, context) => {
    
            if(context.user){
        
                return Client.findOne({ _id: context.user._id });
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
        meSupplier: async (parent, args, context) => {

            if(context.user){
                return Supplier.findOne({ _id: context.user._id });
            }

            throw new AuthenticationError('Account not found');
        },
        suppliers: async () => {
            return await Supplier.find({});
        },
        supplier: async (parent, args) => {
            const {_id} = args;
            const supplier = await Supplier.findById({_id});

            return supplier;
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
        },
        addCardSupplier: async (parent, args, context)=>{
            
            const { input } = args;

            console.log(context.user);

            if(context.user) {

                const addCard = await Supplier.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: { card: input }},
                    { new: true, runValidators: true }
                );

                return addCard;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeCard: async (parent, args, context) => {

            const {input} = args;
            const {_id} = input;

            if(context.user){

                const deleteCard = await Supplier.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: { card: {_id}}},
                    { new: true}
                );

                return deleteCard;
            }

            throw new AuthenticationError('You need to be logged in!');

        }
        
    }
}

module.exports = resolvers;

