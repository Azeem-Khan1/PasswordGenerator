// Basic dictionary of all characters available for use
chars = {
    "cap": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "low": "abcdefghijklmnopqrstuvwxyz",
    "num": "0123456789",
    "sym": "`~!@#$%^&*()-_=+[]{}|;:',.<>/?"
};

// Adds items from "chars" to "selectedChars" based on what preferences are checked by the user
function isChecked(id, key) {
    if (typeof id === "string" && typeof key === "string") {
        const checkbox = document.getElementById(id);

        if (checkbox.checked) {
            selectedChars = selectedChars + chars[key];
        }
    }
    else {
        console.log("Invalid parameters");
    }
}

// Random number generator used later for random password generation
function randomNum(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min) + min);
}

function getLength(){
    let passwordLen = document.getElementById('numChar').value;
    return passwordLen
}

function generate(passwordLen) {
    selectedChars = "";
    isChecked("capCheck", "cap");
    isChecked("lowCheck", "low");
    isChecked("numCheck", "num");
    isChecked("symCheck", "sym");
    const outputField = document.getElementById("output");


    if (passwordLen == "" || passwordLen <= 2 || passwordLen > 99) {
        outputField.innerHTML = "Length must be between 3 and 99 characters";
    } else {
        let pswd = "";
        for (i = 0; i < passwordLen; i++) {
            if (selectedChars.length > 0) { // if the user has at least one preference selected
                let c = randomNum(0, selectedChars.length - 1);
                // Make the password appear one character at a time (extra animation)
                setTimeout(function () {
                    pswd += selectedChars[c];
                    outputField.innerHTML = pswd;
                }, i * 70); // delay between characters
            }
            else { // user does not have anything selected
                let err = "At least one checkbox must be selected";
                outputField.innerHTML = err;
                break;
            }
        }
    }
}