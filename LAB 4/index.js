function addItem(){

    var newDiv = document.createElement("div");
    var newText = document.createElement("input");

    var userInput = document.getElementById("todoInput").value;

    newText.setAttribute("id", userInput);
    newText.setAttribute("value", userInput);
    newText.setAttribute("readonly", "");
    newText.classList.add("form-control");
    
    newDiv.appendChild(newText);

    document.getElementById("updateTask").appendChild(newDiv);
    document.getElementById("todoInput").value = "";
}

function sortList(){
    
}