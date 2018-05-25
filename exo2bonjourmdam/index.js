    /*Créez une classe produit
    nom
    prix
Créez une classe Panier avec :
    une méthode ajoute( produit )
   une méthode retire( produit )
    une proprieté totalHT
    une proprieté totalTTC

Utilisation : ajouter ce qu'il faut à ce code de base pour qu'il fonctionne.*/
function Produit(nom_produit,prix_produit){
this.nom = nom_produit;
this.prix = prix_produit;
}

function Panier(){
      this.totalHT = 0;
      this.totalTTC =0;
      this.liste = [];
      this.ajoute = function(produit){
        this.liste.push(produit);
        this.totalHT += produit.prix;
        this.totalTTC=(this.totalHT*10)*(10*1.2)/100;
           
      };
      this.retire = function(produit){
 //this.produit = [];
      };
}

var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);
//console.log(baguette);
var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log('Prix HT de la liste:',panier.totalHT);
console.log('Prix TTC de la liste:',panier.totalTTC);
console.log(this.panier.liste)



var totalHT
var totalTTC


