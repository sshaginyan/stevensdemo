'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tickersymbol: {
        type: Sequelize.STRING(20)
      },
      billingcity: {
        type: Sequelize.STRING(40)
      },
      billinglatitude: {
        type: Sequelize.DOUBLE
      },
      accountsource: {
        type: Sequelize.STRING(40)
      },
      name: {
        type: Sequelize.STRING(255)
      },
      lastmodifieddate: {
        type: Sequelize.TIME
      },
      phone: {
        type: Sequelize.STRING(40)
      },
      masterrecordid: {
        type: Sequelize.STRING(18)
      },
      isdeleted: {
        type: Sequelize.BOOLEAN
      },
      systemmodstamp: {
        type: Sequelize.TIME
      },
      billingpostalcode: {
        type: Sequelize.STRING(40)
      },
      billinglongitude: {
        type: Sequelize.DOUBLE
      },
      createddate: {
        type: Sequelize.TIME
      },
      billingstate: {
        type: Sequelize.STRING(80)
      },
      accountnumber: {
        type: Sequelize.STRING(40)
      },
      website: {
        type: Sequelize.STRING(255)
      },
      billingcountry: {
        type: Sequelize.STRING(80)
      },
      description: {
        type: Sequelize.TEXT
      },
      fax: {
        type: Sequelize.STRING(40)
      },
      billingstreet: {
        type: Sequelize.STRING(255)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account');
  }
};
