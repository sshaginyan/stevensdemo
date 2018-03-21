module.exports = {
  production: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    use_env_variable: 'https://username:password@fakeurl.com/testing123'
  }
};
