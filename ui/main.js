//Counter code
var button = document.getElementById("counter");
button.onclick = function () {
    
    //Make a request to the counter end point

    //capture a response and store it in a variable
    
    //Render the variable in the correect span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
