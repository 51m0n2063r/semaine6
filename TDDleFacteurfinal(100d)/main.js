//recupere le courrier de la poste
//modele de courrier destin massage
//instanciation des objets a partir des modeles
//fin de journee sacoche vide

function Lettre(adresse, message) {
	this.adresse = adresse;
	this.message = message;
}
function Habitation(adresse) {
	this.adresse = adresse;
   this.bal = {
		courriers: [],
		deposerCourrier: function(courrier) {
			this.courriers.push(courrier);
		},
		retirerCourrier: function() {
			this.courriers = [];
		}
	}
}
maison1 = new Habitation('chemin des développeurs');
maison2 = new Habitation('Rte de St Go');
maison3 = new Habitation("rue de l'avenir");
maison4 = new Habitation('Rue Saint Rome');
maison5 = new Habitation('rue truc much');
lettre1 = new Lettre('Rte de St Go', 'Au revoir');
lettre2 = new Lettre('chemin des développeurs', 'salut');
lettre3 = new Lettre('chemin des développeurs', 'Bonjour');
lettre4 = new Lettre('rue truc much', 'coucou');
//console.log(lettre1);

var distribuer = [maison1, maison2, maison3, maison4, maison5];
var sacoche = [lettre1, lettre2, lettre3, lettre4];

function distribuerC() {
	for (i = 0; i < distribuer.length; i++) {
		for (j = 0; j < sacoche.length; j++) {
			if (sacoche[j].adresse == distribuer[i].adresse) {
				distribuer[i].bal.deposerCourrier(sacoche[j]);
        sacoche.splice(j,1);
        j = 0;
        console.log(i,j);
      }
	//			lettre1 != maison2;
				// console.log(deposeCourrier);
			}
		}
	}

distribuerC();
console.log("sacoche: ",sacoche)
console.log("les maison", distribuer)

