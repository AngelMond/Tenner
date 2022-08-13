const clientList = require('../seeds/clientList');
const _ = require('lodash');

const resolvers = {
    Query: {
        clients: () => {
            return clientList;
        },
        client: (parent, args) => {
            const id = args.id;
            const client = _.find(clientList, {id});

            return client;
        }
    }
}

module.exports = resolvers;