const app = require("express")();
const { ApolloServer } = require("apollo-server-express");
const models = require("../models");
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const PORT = 4000;
server.applyMiddleware({ app });
app.listen(PORT, () =>
	console.log(`SERVER LISTEING AT PORT http://localhost:${PORT}/graphql`)
);
