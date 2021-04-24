const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		id: Int!
		username: String!
		email: String!
		password: String!
		roleId: Int!
		roles: Roles!
	}

	type Roles {
		id: Int!
		roleName: String!
	}

	type AuthPayload {
		token: String!
		user: User!
	}

	type Query {
		getAllUsers: [User!]!
		getUserByEmail(email: String!): User
		userLogin(email: String!, password: String!): AuthPayload!
	}

	type Mutation {
		createUser(
			username: String!
			email: String!
			roleId: Int!
			password: String!
		): AuthPayload!
	}
`;

module.exports = typeDefs;
