// Get the button element by its ID
const button = document.getElementById("generator");
const userNameInput = document.getElementById("userName");



// Add a click event listener to the button
button.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 10);
    const name = userNameInput.value; // Get the name entered by the user
    if (name) {
        greetingMessage.textContent = `Hi, ${name}!`; // Display the greeting message
    }

    if (randomNum == 0){
        window.open("https://neal.fun/", "_blank");
    } else if (randomNum == 1){
        window.open("https://thisissand.com/", "_blank");
    }else if (randomNum == 2){
        window.open("https://mix.com/", "_blank");
    }else if (randomNum == 3){
        window.open("https://www.coolmathgames.com/", "_blank");
    }else if (randomNum == 4){
        window.open("https://littlealchemy2.com/", "_blank");
    }else if (randomNum == 5){
        window.open("https://www.window-swap.com/", "_blank");
    }else if (randomNum == 6){
        window.open("https://theuselessweb.com/", "_blank");
    }else if (randomNum == 7){
        window.open("https://www.random.org/", "_blank");
    }else if (randomNum == 8){
        window.open("https://asoftmurmur.com/", "_blank");
    }else if (randomNum == 9){
        window.open("https://www.girlsgogames.com/", "_blank");
    }

});
