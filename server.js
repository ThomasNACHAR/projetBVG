import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
const app = express();
const port = process.env.PORT || 3000;

// Connection to database
mongoose.connect('mongodb://localhost:27017/testdb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

// Contact Schema

const contactSchema = new mongoose.Schema( {
  nom: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
})

const ContactModel = mongoose.model('Contact', contactSchema)

// Recettes Schema

const recetteSchema = new mongoose.Schema( {
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  titleImage: { type: String, required: true },
  auteur: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tags: [{ type: String }],
  path: { type: String, required: true },
  estAffiche: { type: Boolean, default: true }
})

const RecetteModel = mongoose.model('Recette', recetteSchema)


// Middlewares
app.use(express.json());
app.use(express.text());
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Recettes');
  },
  filename: (req, file, cb) => {
    if (fs.existsSync('Recettes/'+file.originalname)) {
      const error = new Error("L'image existe déjà !");
      error.code = 'EXISTING_FILE_ERROR';
      return cb(error);
    }
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

/**  Requêtes **/

// Contact
app.post('/api/contact', (req, res) => {
  const contactData = req.body;
  console.log("Données :", contactData);
  res.json({ message: 'Données reçues avec succès' });
  const newContact = new ContactModel({
    nom: contactData.nom,
    email: contactData.email,
    message: contactData.message
  });
  newContact.save()
  .then(savedContact => {
    console.log("Formulaire envoyé :", savedContact)
  })
  .catch(err => {
    console.error("Erreur d'envoi :", err);
  })
})

// Login admin

app.post('/admin/connect', async (req, res) => {
  const { login, password } = req.body;
  const adminCollection = db.collection('Admin');
  const documentLogin = await adminCollection.findOne( {login} );
  if (!documentLogin) return res.status(401).send(false)
  const documentPassword = await adminCollection.findOne( {password} );
  if (!documentPassword) return res.status(401).send(false)
  else return res.send(true);
})

// GET recettes

app.get('/api/recettes', (req, res) => {
  RecetteModel.find()
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    console.error('Erreur de récupération de la collection :', error);
    res.status(500).json({ error: 'Erreur de serveur interne' });
  })
})

// POST recette unique

app.post('/api/recette', (req, res) => {
  RecetteModel.findOne({path: req.body})
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    console.error('Erreur de récupération de la collection :', error);
    res.status(500).json({ error: 'Erreur de serveur interne' });
  })
})


/**  Créer recette **/

// Téléchargement image
app.post('/admin/image', (req, res) => {
  upload.single('file')(req, res, function (err) {
    if (err) {
      if (err.code === 'EXISTING_FILE_ERROR') {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json({ error: 'Erreur lors du téléchargement du fichier.' });
    }
    res.json({ message: 'Fichier téléchargé avec succès' });
  });
});

app.post('/admin/recette', (req, res) => {
  const recetteData=req.body;
  console.log("Données :", recetteData);
  res.json( {message: 'Données reçues avec succès ! '})
  let path = recetteData.titre.toLowerCase();
  path = path.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  path = path.replace(/\s+/g, '-');
  path = path.replace(/[^a-z0-9-_]/g, '');
  const recette = new RecetteModel({
    titre: recetteData.titre,
    contenu: recetteData.contenu,
    ingredients: recetteData.ingredients,
    titleImage: recetteData.titleImage,
    auteur: recetteData.auteur,
    date: new Date(),
    tags: recetteData.tags,
    path: path
  })
  recette.save()
  .then(savedRecipe => {
    console.log("Recette envoyée :", savedRecipe)
  })
  .catch(err => {
    console.error("Erreur d'envoi :", err);
    res.status(500).json({ erreur: "Veuillez remplir tous les champs." });
  })

})

// GET Contact

app.get('/admin/contact', (req, res) => {
  ContactModel.find()
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    console.error('Erreur de récupération de la collection :', error);
    res.status(500).json({ error: 'Erreur de serveur interne' });
  });
})



// Test MongoDB

const rechercheDonnee = async () => {
  try {
    const resultat = await ContactModel.findOne({ nom: 'zeze' });
    if (resultat) {
      console.log('Donnée trouvée :', resultat);
    } else {
      console.log('Aucune donnée trouvée avec cet ID.');
    }
  } catch (erreur) {
    console.error('Erreur lors de la recherche des données :', erreur);
  } finally {
    // Déconnectez-vous de la base de données après l'opération
    mongoose.connection.close();
  }
};

// rechercheDonnee();
// Starting the server

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});