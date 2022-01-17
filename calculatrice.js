window.onload=function(){
var tds = document.getElementsByTagName("td")
for(i=0 ; i<tds.length ;i++){
tds[i].addEventListener("click", calculer)
}
}


function calculer(){
//  if de AC
    if (this. textContent== "AC") {
    document.getElementById("cal").innerText=""
}
// elseif dial =
else if( this.textContent=="="){
    // try essayer et catch  ou cas ou vous avez une ereur
    // calculer le resulta
     try{ var res= eval(document.getElementById("cal").textContent)
    //  pour afficher le resultat innertext
    document.getElementById("cal").innerText=res
    } catch(err){ document.getElementById("cal").innerText="erreur"}

}
else{
    document.getElementById("cal").innerText+=this.textContent
}
}