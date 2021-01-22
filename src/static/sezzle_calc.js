//connect user to server with socket.io (server)
var socket = io(location.origin);
socket.on('connect', function(){
    console.log('Connected')
});

//call data to client side
socket.on('calc', function(data){
//document.getElementById("answersList").innerHTML = '';
    let list = document.getElementById("answersList");
    let createdLi = document.createElement("li");
    createdLi.innerText = data;
    list.appendChild(createdLi);
    console.log('data', data);
});
socket.on('disconnect', function(){

});

// function getAnswer outputs 'answer' by calling variables in body  
function getAnswer() {
//const used so inputs 1 & 2 can't be reassigned since their values will stay the same once entered
const input1 = document.getElementById("input1").value;
const input2 = document.getElementById("input2").value;
//let used because value of answer will change due to use of mathematical function
let answer = document.getElementById("answer");
//getElementByName used instead of Id used to return list of elements rather than single element
let inputs = document.getElementsByName("action");

//for loop with if/else statement to state input2 cannot be 0 because input values cannot be divided by 0
    for (let i in inputs) {
     if (inputs[i].value == "/" && inputs[i].checked && input2 == 0) {
            alert("Unable to divide number by zero");
            answer.value = "";
        }
        else if (inputs[i].checked) {
            answer.value = eval(input1 + inputs[i].value + input2);
            // making AJAX request to localhost:3000/add/:number
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('Success');
                }
            };
            var url = "add/" + eval(input1 + inputs[i].value + input2);
            xhttp.open("GET", url, true);
            xhttp.send();
        }
    }

    displayAnswers();
}

function displayAnswers() {
    let arrayAnswers = null;

    // making AJAX request to localhost:3000/view
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            arrayAnswers = json.arr;

            if (arrayAnswers == null) {
                arrayAnswers = [];
            }

            let list = document.getElementById("answersList");
            document.getElementById("answersList").innerHTML = '';
            //Backwards for loop to limit array length to 10 and ensure most recent answer is visible at top of the list
            for (var i = arrayAnswers.length - 1; i >=10; i--) {
                let createdLi = document.createElement("li");
                createdLi.innerText = arrayAnswers[i];
                list.appendChild(createdLi);
            }

        }
    };
    //initilize new request, send ensures method doesn't return if response value is 'false'
    xhttp.open("GET", "view", true);
    xhttp.send();
}

displayAnswers();

