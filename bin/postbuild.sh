# cd server/
# ../node_modules/.bin/sequelize db:migrate
# ../node_modules/.bin/sequelize db:seed:all

cd react-ui/
npm install &&
npm install --only=dev --no-shrinkwrap &&
npm run build
