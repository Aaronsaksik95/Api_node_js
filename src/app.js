const app = require('./services/express.service');
const db = require('./services/mongoose.service');

app.start();
db.connectDb();

// heroku login   
// heroku logs --tail --app api-node-aaron-saksik

// RESTE A FAIRE: 
// Style:
//      footer
//      Vous aimeriez aussi
//      Mailjet
//      bouton
//      caroussel
// Categorie
//      array categorie dans produit
//      filtre categori
// router link
// Ajouter + image
// Users.validation joi
// Gerer les erreurs (si le produit a le même titre...)
