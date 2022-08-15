const {Client, Supplier} = require('../models');

const resolvers = {
    Query: {
        clients: () => {
            return Client.find({});
        },
        client: async (parent, args) => {
            const {id} = args;
            const client = await Client.findById({id: Number(id)});

            return client;
        },
        suppliers: () => {
            return Supplier.find({});
        },
        supplier: (parent, args) => {
            const {id} = args;
            const supplier = Supplier.findById({id: Number(id)});

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

            return client;
        },
        createSupplier: async (parent, args) => {
            const {input} = args;
            const supplier = await Supplier.create(input);
            // const token = signToken(user);

            return supplier;
        }
    }
}

module.exports = resolvers;

