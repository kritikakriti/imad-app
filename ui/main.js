console.log('Loaded!');

//Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='Hasura-web-app';

//move the image
var madi=document.getElementById('madi');
 madi.onClick = function(){
    img.style.marginLeft='100px';
};

