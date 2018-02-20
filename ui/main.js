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
                var counter = request.response.Text;
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
