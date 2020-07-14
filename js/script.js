var word = "Eduardo Moresco";
var i = 0;
var timer = setInterval(function(){
    document.getElementById("name").innerHTML+=word[i];i++;
    if(i>word.length-1){
        clearInterval(timer)
    }
},90)


// Mobile menu

document.getElementById("bars").addEventListener("click", function(e){
    e.preventDefault();
    let menu = document.getElementById("menu");
    menu.style.display = "block";
})
document.getElementById("close").addEventListener("click", function(e){
    e.preventDefault();
    menu.style.display = "none";
})

window.scroll({
    top: 1000, // Captura a distancia do topo onde deseja ser rolado
    left: 0,// Faz o mesmo do top mas em um ambito horizontal
    behavior: 'smooth' // Aqui eh onde vem toda a magica, ele suporta duas opcoes, o `smooth` e o `normal`
  })