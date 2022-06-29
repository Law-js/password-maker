const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "<>,?;.:/!§ù%*µ^¨$£-+=é\"'(è_çà)@";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
    let data = [];
    let password = '';
    if (lowercase.checked) data.push(...dataLowercase); // ... pour tous casser et pas mettre tout en un
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if(data.length === 0){
        alert('Veuillez sélectionner des critères');
        return;
    }
    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutput.value = password; // innerHTML et textContent ne fonctionnent pas pour un input utiliser .value

    // COPIER
    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié !"

    setTimeout(() => {
        generateButton.textContent = "Générer";
    }, 2000);


}

generateButton.addEventListener('click', generatePassword);
