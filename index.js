const { ApolloServer } = require('apollo-server');

// Define full query types
const typeDefs = `
    type Query {
        hello: String!
    }
`;

// Has to associate data to entry points
const resolvers = {
    Query: {
        hello: () => "Hello, l'api fonctionne"
    }
};

// Server configuration before starting it
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Server launch
server.listen().then( ({url}) => {
    console.log(`Here is the selected URL: ${url}`);
})