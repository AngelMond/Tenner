const clientList = require('../seeds/clientList');
const supplierList = require('../seeds/supplierList');
const imagesList = require('../seeds/imagesList');
const _ = require('lodash');

const resolvers = {
    Query: {
        clients: () => {
            return clientList;
        },
        client: (parent, args) => {
            const id = args.id;
            const client = _.find(clientList, {id: Number(id)});

            return client;
        },
        suppliers: () => {
            return supplierList;
        },
        supplier: (parent, args) => {
            const id = args.id;
            const supplier = _.find(supplierList, {id: Number(id)});

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
        createClient: (parent, args) => {
            const client = args.input;
            const lastId = clientList[clientList.length-1].id;
            client.id = lastId + 1;
            clientList.push(client);

            return client;
        }
    }
}

module.exports = resolvers;

