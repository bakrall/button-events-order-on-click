let button = document.querySelector('button');

function logEvt ( el, type ) {
  console.log( el + ' ' + type + ' is fired. <br>' );
}

button.addEventListener('mousedown', function() {logEvt('button', 'mousedown')});
button.addEventListener('click', function() {logEvt('button', 'click')});
button.addEventListener('mouseup', function() {logEvt('button', 'mouseup')});
button.addEventListener('focusout', function() {logEvt('button', 'focusout')});