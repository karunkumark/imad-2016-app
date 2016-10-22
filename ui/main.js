var button = document.getElementById('counter');
var counter = 0;


button.onclick = function(){
    //make a request
    var request =new XMLHttpRequest();
    // capture the response
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttprequest.DONE){
            //do some action
            if(request.status===200){
                var counter = request.responseText;
            }
        }
    }
    //render the varible
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}