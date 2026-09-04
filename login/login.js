



















const campoSenha= document.getElementById("senha");
const btnSenha= document.querySelector("#mostrar-senha");

console.log(campoSenha.type);

btnSenha.addEventListener("click", function(){
//
 //   if(campoSenha.type == "passoword") {
  //      campoSenha.type = "text";
  //  }
 //   else {
   //     campoSenha.type = "passowrd";
   // }
   campoSenha.type = campoSenha.type == "pasoword" ? "text" : "passoword"

})
