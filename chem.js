function calculateQuantumNumber() {
    var protonInput = parseInt(document.getElementById('protonInput').value);
    var quantumNumber;

    if (protonInput >= 1 && protonInput <= 86) {
        if (protonInput === 1) {
            quantumNumber = '1';
        } else if (protonInput === 2) {
            quantumNumber = '2';
        } else if (protonInput <= 10) {
            quantumNumber = '2 ' + (protonInput - 2);
        } else if (protonInput <= 18) {
            quantumNumber = '2 8 ' + (protonInput - 10);
        } else if (protonInput <= 36) {
            quantumNumber = '2 8 8 ' + (protonInput - 18);
        } else if (protonInput <= 54 ) {
            quantumNumber = '2 8 8 18  ' + (protonInput - 36);
        } else if (protonInput <= 86) {
            quantumNumber = '2 8 8 18 18 ' + (protonInput - 54);
        }
    } else {
        quantumNumber = 'Enter a valid input between 1 and 86';
    }

    document.getElementById('quantumNumberResult').innerText = quantumNumber;
    document.getElementById('protonInput').value = '';
}