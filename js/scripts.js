//nie wiedziałem czy tekst ma się wyświetlić tylko w postaci alertów, czy na stronie również więc zrobiłem to drugie (+ w konsoli oczywiście)

var withButtonClass = document.getElementsByClassName('button');
var arrayLenght = withButtonClass.length;
for ( var i = 0 ; i < arrayLenght ; i++) {
  var added = document.getElementById('added');
  var newElem = document.createElement('p');
  newElem.innerHTML = withButtonClass[i].outerText;
  added.appendChild(newElem);
  console.log(newElem.outerText);
  alert(newElem.outerText);
}