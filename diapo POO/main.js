function Diaporama( cible, tableau,repertoire,duree){

 this.cible=document.getElementById(cible);
 this.Tableau=tableau;
 this.temp=duree;
 this.repertoir_image=repertoire;
 this.tbmage=-1;
 this.diap();

 this.diap = function(){

  this.tbmage++;
  this.cible.src=this.repertoir_image+this.Tableau[this.tbmage]+'.jpg';
  if(this.tbmage==this.Tableau.length-1){
   this.tbmage=-1
  }
  var that=this;
  setTimeout(that.diap, that.temp);
 }
