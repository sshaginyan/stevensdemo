const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { account } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/api/fetch-all-accounts', async (request, response) => {

  const records = await account.findAll({}, {
    attributes: ['id', 'name', 'website', 'billingcity']
  }).map(el => el.get({ plain: true }));
  response.json(records);

});

app.get('/api/fetch-account/:id', async (request, response) => {

  const { id } = request.params;

  const records = await account.findById(id, {
    attributes: ['id', 'name', 'phone', 'website', 'billingstreet' ,'billingcity', 'billingstate', 'billingpostalcode', 'billingcountry', 'description', 'lastmodifieddate']
  });
  response.json(records);

});

app.put('/api/upsert-account', async (request, response) => {

  await account.upsert(request.body);
  response.sendStatus(200);

});

app.delete('/api/delete-account', async (request, response) => {

  await account.destroy({
    where: request.body
  });

  response.sendStatus(200);
});


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
