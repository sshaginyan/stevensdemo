const os = require('os');
const cluster = require('cluster');

console.error(`Node cluster master ${process.pid} is running`);

cluster.setupMaster({
  exec: './server/worker.js'
});

os.cpus().forEach(() => cluster.fork());

cluster.on('exit', (worker, code, signal) => {
  console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
});
