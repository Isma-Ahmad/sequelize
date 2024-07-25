module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
        timestamps: true,
      }
);
    return User;
  };