const app = require('./services/express.service');
const db = require('./services/mongoose.service');

app.start();
db.connectDb();

// heroku login   
// heroku logs --tail --app api-node-aaron-saksik

// RESTE A FAIRE: 
// Users.validation joi
// Regler       de variable d'env coté front
// Gerer les erreurs (si le produit a le même titre...)