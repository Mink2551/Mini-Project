function showPrompt() {
    var name = prompt("Type Anyone:");
    var resultDiv = document.querySelector('.result');
    
    if (name === "You") 
    {
        resultDiv.innerHTML = "Firstname: Pacharapol<br>Lastname: Pimpa<br>Nickname: Mink<br>Age: 15<br>Height: 178cm<br>Weight: 47kg";
    }
     else if (name === "Mom") 
    {
        resultDiv.innerHTML = "Firstname: Darawadee<br>Lastname: Pimpa<br>Nickname: Muay<br>Age: 52<br>Height: 160cm<br>Weight: 60kg";
    }
     else if (name === "Dad") 
    {
        resultDiv.innerHTML = "Firstname: Suriya<br>Lastname: Pimpa<br>Nickname: Ya<br>Age: 54<br>Height: 182cm<br>Weight: 73kg";
    }
     else if (name === "Bro") 
    {
        resultDiv.innerHTML = "Firstname: Pongpol<br>Lastname: Pimpa<br>Nickname: Mark<br>Age: 23<br>Height: 175cm<br>Weight: 52kg";
    }
     else 
    {
        alert("Type the correct keyword");
    }
}




function showContent() {
    var contentMap = 
    {
        "You": "Content 1",
        "Mom": "Content 2",
        "Dad": "Content 3",
        "Bro": "Content 4"
    };
    var name = prompt("Type Anyone:");
    var resultDiv = document.querySelector('.result');

    if (contentMap.hasOwnProperty(name)) 
    {
        resultDiv.textContent = contentMap[name];
    } else 
    {
        resultDiv.textContent = "Type the correct keyword";
    }
}
