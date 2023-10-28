const letters = document.querySelectorAll(".letter");
let current_letter = 0;

function toggleDisabled(num) {
    let myElement = letters[0];
    let count = 0;
    letters.forEach((element) => {
        if (count !== num) {
            element.disabled = true;
        } else {
            element.disabled = false;
            myElement = element;
            // element.focus();
        }
        count++;
    })
    return myElement
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

letters.forEach(element => {
    element.addEventListener("keydown", function (event) {
        // Check if input is a valid letter.
        if (!isLetter(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        } else if (isLetter(event.key)) {
            console.log(current_letter);
            if (current_letter === 0) {
                current_letter++;
            } else if (current_letter === 5) {
                event.preventDefault();
            } else {
                let enabledInput = toggleDisabled(current_letter);
                enabledInput.focus();
                current_letter++;
                
            }
        } else if (event.key === "Backspace") {
            if (element.textContent == "") {
                current_letter--;
                let enabledInput = toggleDisabled(current_letter);
                enabledInput.focus();
            }
        }
    
        console.log(isLetter(event.key));
    });
});

let start_letter = toggleDisabled(current_letter);
start_letter.focus();