const _ = require('lodash');
const Sequelize = require('sequelize');

const config = require('./config/config');

const { DATABASE_URL } = process.env;

let key = _.isUndefined(DATABASE_URL) ? 'development' : 'production';
let options = _.omit(config[key], ['database', 'username', 'password']);
let creds = _.values(_.pick(config[key], ['database', 'username', 'password']));

module.exports =  new Sequelize(...creds, options);
