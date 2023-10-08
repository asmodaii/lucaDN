// Définition du personnage John
const john = {
    prenom: "John",
    santeMentale: 10,
  };
  
  // Liste de musiques possibles
  const musiques = ["megalovania", "MAITRE-gym", "Satisfaction", "Anissa - Wejdene", "oui mais non-SM:LY"];
  
  // Définition du trajet
  const trajet = {
    radio: musiques,
    feuxRouges: 30,
    changements: 0,
  };
  
  // Fonction pour jouer une musique aléatoire et gérer la santé mentale de John
  function jouerMusique() {
    const musiqueAleatoire = musiques[Math.floor(Math.random() * musiques.length)];
    console.log(`Musique jouée: ${musiqueAleatoire} - Feux restants: ${trajet.feuxRouges}`);
    
    // Vérification si la musique est "Anissa - Wejdene"
    if (musiqueAleatoire === "Anissa - Wejdene") {
      john.santeMentale--;
      console.log(`John n'aime pas cette musique. Sa santé mentale est maintenant à ${john.santeMentale}.`);
    }
  
    // Vérification des conditions de fin
    if (john.santeMentale <= 0) {
      console.log("Explosion! John a perdu sa santé mentale.");
    } else if (trajet.feuxRouges === 0) {
      console.log(`John est bien arrivé chez lui après ${trajet.changements} changements de taxi.`);
    } else {
      trajet.feuxRouges--;
      jouerMusique(); // Jouer la musique au feu rouge suivant
    }
  }
  
  // Début du trajet
  console.log(`Départ de chez John - Feux restants: ${trajet.feuxRouges}`);
  jouerMusique();
  