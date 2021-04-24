const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
	Query: {
		async getAllUsers(root, { models }) {
			return models.User.findAll();
		},
		async getUserByEmail(root, { email }, { models }) {
			return models.User.findOne({
				where: { email },
			});
		},
		async userLogin(root, { email, password }, { models }) {
			try {
				const user = await models.User.findOne({
					where: {
						email,
					},
				});
				if (!user) {
					throw new Error("No User with that email");
				}
				const isValid = await bcrypt.compare(password, user.password);
				if (!isValid) {
					throw new Error("Incorrect password");
				}
				const token = jwt.sign(
					{ id: user.id, email: user.email },
					process.env.JWT_SECRET,
					{ expiresIn: "1d" }
				);
				return { token, user };
			} catch (err) {
				throw new Error(err.message);
			}
		},
	},

	Mutation: {
		async createUser(root, { username, email, roleId, password }, { models }) {
			const res = await models.User.create({
				username,
				email,
				roleId,
				password: await bcrypt.hash(password, 12),
			});
			const token = jwt.sign(
				{
					id: res.id,
					username: res.username,
					email: res.email,
					roleId: res.roleId,
				},
				process.env.JWT_SECRET,
				{ expiresIn: "1y" }
			);

			return {
				token,
				id: res.id,
				email: res.email,
				username: res.username,
				roleId: res.roleId,
			};
		},
	},
	User: {
		async roles(user) {
			return user.getRole();
		},
	},
	// Roles: {
	// 	async user(user) {
	// 		return user.getUser();
	// 	},
	// },
};

module.exports = resolvers;
