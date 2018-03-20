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
  production: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    use_env_variable: 'DATABASE_URL'
  }
};
