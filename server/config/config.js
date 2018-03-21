const use_env_variable = process.env.DATABASE_URL || '';

module.exports = {
  production: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    use_env_variable
  }
};
