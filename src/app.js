const app = require('./services/express.service');
const db = require('./services/mongoose.service');
require("regenerator-runtime/runtime");

app.start();
db.connectDb();

// heroku login   
// heroku logs --tail --app api-node-aaron-saksik

// RESTE A FAIRE: 
// Users.validation joi
// Regler le pb de async dans heroku coté API
// Regler       de variable d'env coté front
// Limiter les routes fronts pour les users
// Gerer les erreurs (si le produit a le même titre...)
// Ajouter Commandes en bdd sans oublier stripe