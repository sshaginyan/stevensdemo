'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('account', [
      {
        tickersymbol: 'BTXT',
        billingcity: 'Burlington',
        billinglatitude: null,
        accountsource: null,
        name: 'Burlington Textiles Corp of America',
        lastmodifieddate: '2018-03-14 21:11:56.000',
        phone: '(336) 222-7000',
        masterrecordid: null,
        isdeleted: false,
        systemmodstamp: '2018-03-17 10:48:23.000',
        billingpostalcode: '27215',
        billinglongitude: null,
      createddate: '2018-03-14 21:11:56.000',
        billingstate: 'NC',
        accountnumber: 'CD656092',
        website: 'www.burlington.com',
        billingcountry: 'USA',
        description: null,
        fax: '(336) 222-8000',
        billingstreet: '525 S. Lexington Ave'
      },{
        tickersymbol: 'EDGE',
        billingcity: 'Austin',
        billinglatitude: null,
        accountsource: null,
        name: 'Edge Communications',
        lastmodifieddate: '2018-03-14 21:11:56.000',
        phone: '(512) 757-6000',
        masterrecordid: null,
        isdeleted: false,
        systemmodstamp: '2018-03-14 21:11:56.000',
        billingpostalcode: '67613',
        billinglongitude: null,
        createddate: '2018-03-14 21:11:56.000',
        billingstate: 'TX',
        accountnumber: 'CD451796',
        website: 'http://edgecomm.com',
        billingcountry: 'USA',
        description: 'Edge, founded in 1998, is a start-up based in Austin, TX. The company designs and manufactures a device to convert music from one digital format to another. Edge sells its product through retailers and its own website.',
        fax: '(512) 757-9000',
        billingstreet: '312 Constitution Place Austin, TX 78767 USA'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('account', null, {});
  }
};
