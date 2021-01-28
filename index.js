const { ApolloServer } = require('apollo-server');
const { INCOMES } = require('./json-database/incomes');

// Define full query types
const typeDefs = `
    enum CountryCodes {
        FR
        ESP
        EN
    }

    type Income {
        id: Int,
        date: String!,
        amount: Int,
        transactor: String,
        countryCode: CountryCodes!
    }

    type Query {
        totalIncomes: Int!,
        incomes: [Income]!
    }
`;

// Has to associate data to entry points
const resolvers = {
    Query: {
        totalIncomes: () => INCOMES.length,
        incomes: () => INCOMES
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