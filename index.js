var typeCounter = 0; // Counter variable to track the number of times the functions are called

function showPrompt() {
    typeCounter++; // Increment the counter each time the function is called
    var name = prompt("Type Anyone:");
    var resultDiv = document.querySelector('.result');
    
    if (name === "You") 
    {
        resultDiv.innerHTML = "Firstname: Pacharapol<br>Lastname: Pimpa<br>Nickname: Mink<br>Age: 15<br>Height: 178cm<br>Weight: 47kg";
        console.log("Firstname: Pacharapol Lastname: Pimpa Nickname: Mink Age: 15 Height: 178cm Weight: 47kg");
    }
    else if (name === "Mom") 
    {
        resultDiv.innerHTML = "Firstname: Darawadee<br>Lastname: Pimpa<br>Nickname: Muay<br>Age: 52<br>Height: 160cm<br>Weight: 60kg";
        console.log("Firstname: Darawadee Lastname: Pimpa Nickname: Muay Age: 52 Height: 160cm Weight: 60kg");
    }
    else if (name === "Dad") 
    {
        resultDiv.innerHTML = "Firstname: Suriya<br>Lastname: Pimpa<br>Nickname: Ya<br>Age: 54<br>Height: 182cm<br>Weight: 73kg";
        console.log("Firstname: Suriya Lastname: Pimpa Nickname: Ya Age: 54 Height: 182cm Weight: 73kg");
    }
    else if (name === "Bro") 
    {
        resultDiv.innerHTML = "Firstname: Pongpol<br>Lastname: Pimpa<br>Nickname: Mark<br>Age: 23<br>Height: 175cm<br>Weight: 52kg";
        console.log("Firstname: Pongpol Lastname: Pimpa Nickname: Mark Age: 23 Height: 175cm Weight: 52kg");
    }
    else 
    {
        alert("Type the correct keyword");
        console.log("Type the correct keyword");
    }

    console.log("Prompt function called " + typeCounter + " time(s)"); // Log the number of times the function is called
}


function showContent() {
    typeCounter++; // Increment the counter each time the function is called
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

    console.log("Content function called " + typeCounter + " time(s)"); // Log the number of times the function is called
}
