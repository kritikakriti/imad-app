//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    
    //capture a response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make a request
    request.open('GET', 'http://kritikakriti145.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server and send the names
    
    //capture the names and render it as a list
    var names=['name1', 'name2', 'name3', 'name4', 'name5'];
    var list = '';
    for (var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};
