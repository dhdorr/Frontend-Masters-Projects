
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

const letters = document.querySelectorAll(".letter");

letters.forEach(element => {
    element.addEventListener("keydown", function (event) {
        // Check if input is a valid letter.
        if (!isLetter(event.key)) {
            event.preventDefault();
        }
    
        console.log(isLetter(event.key));
    })
});
