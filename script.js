chars = {
    "cap": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "low": "abcdefghijklmnopqrstuvwxyz",
    "num": "0123456789",
    "sym": "`~!@#$%^&*()-_=+[]{}|;:',.<>/?"
};



function isChecked(id, key) {
    if (typeof id === "string" && typeof key === "string") {
        const checkbox = document.getElementById(id);

        if (checkbox.checked) {
            selectedChars = selectedChars + chars[key];
        }
    }
    else {
        console.log("Invalid parameters")
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min) + min);
}

function generate() {
    selectedChars = "";
    isChecked("capCheck", "cap");
    isChecked("lowCheck", "low");
    isChecked("numCheck", "num");
    isChecked("symCheck", "sym");
    const outputField = document.getElementById("output");

    const lengthPSWD = document.getElementById("numChar").value;

    if (lengthPSWD == "" || lengthPSWD <= 2 || lengthPSWD > 99) {
        outputField.innerHTML = "Length must be between 3 and 99 characters";
    }
    else {
        pswd = "";
        for (let i = 0; i < lengthPSWD; i++) {
            if (selectedChars.length > 0) {
                let c = randomIntFromInterval(0, selectedChars.length - 1);
                pswd += selectedChars[c];
            }
            else {
                pswd = "At least one checkbox must be selected"
            }
        }        
        outputField.innerHTML = pswd;
    }
}
