const formulaire = document.getElementById('commande-form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const adresse = document.getElementById('adresse');
const ville = document.getElementById('ville');
const codePostal = document.getElementById('codePostal');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const typeService = document.getElementById('type-service');
const distance = document.getElementById('distance');
const poids = document.getElementById('poids');
const submit = document.getElementById('submit');

// Fonction de validation
function validateForm() {
  let isValid = true;

  // Vérification des champs obligatoires
  if (nom.value === '') {
    alert('Veuillez saisir votre nom');
    isValid = false;
  }
  if (prenom.value === '') {
    alert('Veuillez saisir votre prénom');
    isValid = false;
  }
  if (adresse.value === '') {
    alert('Veuillez saisir votre adresse');
    isValid = false;
  }
  if (ville.value === '') {
    alert('Veuillez saisir votre ville');
    isValid = false;
  }
  if (codePostal.value === '') {
    alert('Veuillez saisir votre code postal');
    isValid = false;
  }
  if (telephone.value === '') {
    alert('Veuillez saisir votre numéro de téléphone');
    isValid = false;
  }
  if (email.value === '') {
    alert('Veuillez saisir votre adresse e-mail');
    isValid = false;
  }

  // Vérification des champs numériques
  if (isNaN(distance.value)) {
    alert('Veuillez saisir une distance valide');
    isValid = false;
  }
  if (isNaN(poids.value)) {
    alert('Veuillez saisir un poids valide');
    isValid = false;
  }

  return isValid;
}

// Ajout de l'événement de soumission
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm()) {
    const commande = {
      nom: nom.value,
      prenom: prenom.value,
      adresse: adresse.value,
      ville: ville.value,
      codePostal: codePostal.value,
      telephone: telephone.value,
      email: email.value,
      typeService: typeService.value,
      distance: distance.value,
      poids: poids.value,
    };
    console.log(commande);
    // Envoi de la commande au serveur
  }
});