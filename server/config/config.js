const url = require('url');
const _ = require('lodash');

let prodConf = {};
const { DATABASE_URL } = process.env;

if(!_.isUndefined(DATABASE_URL)) {
  const parsedUrl = url.parse(DATABASE_URL);
  prodConf = {
    host: parsedUrl.hostname,
    username: _(parsedUrl.auth).split(':').first(),
    password: _(parsedUrl.auth).split(':').last(),
    database: _.replace(parsedUrl.pathname, '/', '')
  };
}

module.exports = {
  development: {
    username: null,
    password: null,
    dialect: 'sqlite',
    database: 'HCNode',
    storage: './server/hcnode.sqlite'
  },
  production: {
    ...prodConf,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
};
