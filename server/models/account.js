'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING(255),
    phone: DataTypes.STRING(40),
    website: DataTypes.STRING(255),
    billingstreet: DataTypes.STRING(255),
    billingcity: DataTypes.STRING(40),
    billingstate: DataTypes.STRING(80),
    billingpostalcode: DataTypes.STRING(40),
    billingcountry: DataTypes.STRING(80),
    description: DataTypes.TEXT,
    lastmodifieddate: DataTypes.TIME
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Account;
};
