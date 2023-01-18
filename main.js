// // // // Pour l'exercice 2
// // // let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"



// // // > Event Target

// // // ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let content = document.getElementById('content');
let elements = content.children;
function myFunction(e) {
  console.log(e.target);
}
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', myFunction);
}

// // // ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

var content = document.getElementById('content');
var elements = content.children;
function myFunction(e) {
  e.target.innerHTML = e.target.innerHTML.toUpperCase();
}
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('dblclick', myFunction);
}

// // // ### 3. Créer un programme qui au hasard choisit parmi les propriétés suivantes et l'applique aux éléments quand on clique sur le button GO : 
// // // - border: 1px solid gold;
// // // - background-color: blue;
// // // - background-color: red;
// // // - border: 5px dotted gold;



// // OR

var button = document.createElement('button');

button.innerHTML = 'GO';
document.body.appendChild(button);
button.addEventListener('click', function() {
  var random = Math.floor(Math.random() * 3);
  var elements = document.getElementsByTagName('div');
  for (var i = 0; i < elements.length; i++) {
    if (random === 0) {
      elements[i].style.border = '1px solid gold';
    } else if (random === 1) {
      elements[i].style.backgroundColor = 'gold';
    } else {
      elements[i].style.color = 'gold';
    }
  }
});














// CORRECTIF


// // Pour l'exercice 2
// let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"




// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !


// let content = document.getElementById("content");
// let elem = content.querySelectorAll("*");

// for (let i = 0;  i< elem.length; i++) {
// elem[i].addEventListener("click",(e)=>
// {
//   console.log(e.target);
// })
// }



// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

// let content = document.getElementById("content");

// let elem = content.querySelectorAll("*");
// for (let i = 0;  i< elem.length; i++) {
// elem[i].addEventListener("click", (e)=> {
// e.target.textContent = e.target.textContent.toUpperCase();
// })
// }




// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 

// let styles = [
//  "border: 1px solid gold;",
//  "background-color: blue;",
//  "background-color: red;",
//  "border: 5px dotted gold;",
// ];

// let content = document.getElementById("content");
// let elem = content.querySelectorAll("*");
// let btn = document.querySelector("input");

// btn.addEventListener("click", (e) => {
// for (let i = 0; i < elem.length; i++) {
//   let randomStyle = styles[Math.floor(Math.random()*
//     styles.length)];
//   elem[i].setAttribute("style", randomStyle)
// }
// })



// let styles = [
//   "border: 1px solid gold;",
//   "background-color: blue;",
//   "background-color: red;",
//   "border: 5px dotted gold;",
//  ];
 
//  let content = document.getElementById("content");
//  let elem = content.querySelectorAll("*");
//  let btn = document.querySelector("input");
 
//  btn.addEventListener("click", (e) => {
//    let randomStyle = styles[Math.floor(Math.random()*
//      styles.length)];
//  for (let i = 0; i < elem.length; i++) {
//    elem[i].setAttribute("style", randomStyle)
//  }
//  })
 
