const os = require('os');
const cluster = require('cluster');

const sequelize = require('./sequelize');

console.error(`Node cluster master ${process.pid} is running`);

cluster.setupMaster({
  exec: 'worker.js'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    os.cpus().forEach(() => cluster.fork());

  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

cluster.on('exit', (worker, code, signal) => {
  console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
});
