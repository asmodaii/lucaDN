

// Tableau de prénoms pour les survivants
const prenomsSurvivants = ["thomma", "Bob", "Charlie", "David", "Evane"];

// Caractéristiques disponibles pour les survivants
const caracteristiques = ["nerd", "sportif", "blond(e)", "chateur", "artiste"];

// Fonction pour générer un nom aléatoire pour un survivant
function genererNomSurvivant() {
  const prenom = prenomsSurvivants.shift();
  const caracteristique = caracteristiques.shift();
  return `${prenom} le ${caracteristique}`;
}

// Classe représentant un survivant
class Survivant {
  constructor() {
    this.nom = genererNomSurvivant();
    this.pointsDeVie = 100;
  }

  attaquer() {
    const probabiliteMort = Math.random();
    const probabiliteEsquive = Math.random();

    if (probabiliteMort < 0.3) {
      return `${this.nom} a attaqué Jason et est mort en sans pouvoir le blesser`;
    } else if (probabiliteEsquive < 0.5) {
      return `${this.nom} a attaqué Jason, a esquivé, et infligé un coup`;
    } else {
      this.pointsDeVie -= 15;
      if (this.pointsDeVie <= 0) {
        return `${this.nom} a attaqué Jason, a infligé un violentcoup de couteau mais est mort.`;
      } else {
        return `${this.nom} a attaqué Jason, a infligé un coup.`;
      }
    }
  }
}

// Fonction pour simuler l'attaque de Jason contre un survivant
function attaquerSurvivant(survivant) {
  const probabiliteMort = Math.random();

  if (probabiliteMort < 0.3) {
    return `Jason a attaqué ${survivant.nom} et l'a tué.`;
  } else if (probabiliteMort < 0.8) {
    survivant.pointsDeVie -= 10;
    return `Jason a attaqué ${survivant.nom}, mais ${survivant.nom} a esquivé un coup.`;
  } else {
    survivant.pointsDeVie -= 15;
    if (survivant.pointsDeVie <= 0) {
      return `Jason a attaqué ${survivant.nom}, a infligé un coup, mais ${survivant.nom} est mort.`;
    } else {
      return `Jason a attaqué ${survivant.nom} et lui a infligé un coup.`;
    }
  }
}

// Création des survivants
const survivants = [];
for (let i = 0; i < 5; i++) {
  survivants.push(new Survivant());
}

// Simulation du combat
const morts = [];
while (true) {
  const survivantAleatoire = survivants[Math.floor(Math.random() * survivants.length)];
  const action = attaquerSurvivant(survivantAleatoire);
  console.log(action);

  if (survivantAleatoire.pointsDeVie <= 0) {
    morts.push(survivantAleatoire.nom);
    survivants.splice(survivants.indexOf(survivantAleatoire), 1);
  }

  if (survivants.length === 0) {
    console.log("Tous les survivants sont morts. Jason a gagné.");
    break;
  }
}

console.log("Les survivants morts sont : " + morts.join(", "));
