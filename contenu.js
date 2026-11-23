/*
  CONTENU DU SITE — Lycée de Ndande
  Modifiez ce fichier avec un éditeur de texte, puis déposez de nouveau le dossier sur l'hébergeur.
  Tant qu'une liste est vide ( [] ), le site affiche des exemples marqués « Exemple ».
  Dès qu'une liste contient au moins un élément, les exemples de cette rubrique disparaissent.
  Ne mettez que des informations validées par l'administration du lycée.

  Catégories d'actualités : Annonces, Informations scolaires, Résultats et distinctions, Événements, Activités
  Classes : Seconde, Première, Terminale, Autre
  Types : Cours, Exercices, Sujets et devoirs, Fiches de révision, Préparation aux examens
  Domaines de projets : Art et culture, Innovation et numérique, Sport, Entrepreneuriat, Sciences, Engagement communautaire
*/
window.SITE_CONTENT = {

  // Photo d'accueil : mettre l'image dans le dossier "images" puis écrire par ex. "images/lycee.jpg"
  hero: "",

  // Coordonnées officielles. Laissez vide ce que vous ne connaissez pas.
  contact: {
    address: "",          // ex. "Ndande, Sénégal"
    phone: "",
    email: "",            // si rempli, le formulaire ouvre la messagerie
    whatsapp: "",         // si rempli, le formulaire ouvre WhatsApp (numéro avec indicatif, sans +)
    map: "",              // texte cherché sur la carte, ex. "Lycée de Ndande, Sénégal"
    social: []            // ex. [{ name: "Page Facebook", url: "https://..." }]
  },

  // Actualités : le texte du champ body peut avoir plusieurs paragraphes (séparés par \n\n)
  news: [
    // { title: "Titre", category: "Annonces", date: "2026-12-01", body: "Texte de l'article." },
  ],

  // Événements à venir
  events: [
    // { title: "Titre", date: "2026-12-15", place: "Lieu", desc: "Description" },
  ],

  // Bibliothèque : mettre les PDF dans le dossier "documents" puis indiquer le chemin dans url
  resources: [
    // { title: "Cours de mathématiques", level: "Terminale", subject: "Mathématiques", type: "Cours", url: "documents/maths-terminale.pdf" },
  ],

  // Projets et talents des élèves
  projects: [
    // { title: "Titre", student: "Nom des élèves", domain: "Sciences", desc: "Description" },
  ],

  // Galerie : mettre les photos dans le dossier "images"
  gallery: [
    // { url: "images/photo1.jpg", caption: "Légende" },
  ]
};
