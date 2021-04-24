const { ApolloServer, gql } = require("apollo-server-express");
const app = require("express")();
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// const typeDefs = gql`
// 	type Query {
// 		hello: String!
// 	}
// `;
// const resolvers = {
// 	Query: {
// 		hello: () => "hello world",
// 	},
// };
const models = require("../models");
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const PORT = 4000;
server.applyMiddleware({ app });
app.listen(PORT, () =>
	console.log(`SERVER LISTENING AT PORT http://localhost:${PORT}/graphql`)
);
