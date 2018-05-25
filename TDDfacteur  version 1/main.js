function Habitation(adresse){
    this.adresse = adresse;
    this.bal = {
        courriers: [],
        deposerCourrier: function(courrier){
          this.courriers.push(courrier)
          this.courriers
        },
        retirerCourrier: function(){
           courriers.courrier
        }
    }

}




function courrier (adresse,message){
this.adresse = adresse,
this.message = message
}
   
maison1 = new Habitation("Chemin des développeurs");
maison2 = new Habitation("Route de St go");


Lettre1 = new courrier ('Chemin des développeurs', 'salut comment va tu ?');
Lettre2 = new courrier ('Route saint gogo', 'bien bien bien');
//console.log(maison1)
//console.log(Lettre2)
 
 maison1.bal.deposerCourrier(Lettre1)
 maison2.bal.deposerCourrier(Lettre2)
 console.log(maison1.bal.courriers)
 console.log(maison2.bal.courriers)


