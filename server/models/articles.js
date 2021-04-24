"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Articles extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Categories, {
				foreignKey: "categoryId",
			});
		}
	}
	Articles.init(
		{
			article: DataTypes.BLOB,
			categoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: "Categories",
					key: "id",
				},
			},
		},
		{
			sequelize,
			modelName: "Articles",
		}
	);
	return Articles;
};
