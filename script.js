const resultButton = document.getElementById('result');
const clearDataDom = document.getElementById('clearData');

resultButton.addEventListener("click", () => {
    result();
})

clearDataDom.addEventListener("click", () => {
    clearData();
})

const result = () => {
    var validity = true;
    a1 = document.getElementById('a1').value;
    a2 = document.getElementById('a2').value;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    c1 = document.getElementById('c1').value;
    c2 = document.getElementById('c2').value;

    (a1 == "") ? a1 = 0 : a1 = a1;
    (a2 == "") ? a2 = 0 : a2 = a2;
    (b1 == "") ? b1 = 0 : b1 = b1;
    (b2 == "") ? b2 = 0 : b2 = b2;
    (c1 == "") ? c1 = 0 : c1 = c1;
    (c2 == "") ? c2 = 0 : c2 = c2;

    if(a1 == 0 && a2 == 0 && b1 == 0 && b2 == 0 && c1 == 0 && c2 == 0){
        validity = false;
        warningMessage = "Insufficient Data !!!";
    }else if(a1 == 0 && b1 == 0){
        validity = false;
        warningMessage = "First Equation Invalid !!!";
    }else if(a2 == 0 && b2 == 0){
        validity = false;
        warningMessage = "Second Equation Invalid !!!";
    }else if(a1 != 0 && a2 != 0 && b1 == 0 && b2 == 0){
        validity = false;
        warningMessage = "Coefficient of Y is missing !!!";
    }else if(a1 == 0 && a2 == 0 && b1 != 0 && b2 != 0){
        validity = false;
        warningMessage = "Coefficient of X is missing !!!";
    }
    
    if(validity == false){
        document.getElementById('warning-msg').setAttribute('class','warning-msg');
        document.getElementById('warning-msg').innerText = warningMessage;
    }

    if(a2%a1 == 0 && b2%b1 == 0){
        if(c1 == c2){
            typeOfEquation = "Infinitely Many Solution (Identical Lines)";
            valueOfX = "INF";
            valueOfY = "INF";
        }else{
            typeOfEquation = "NO";
            valueOfX = "NO";
            valueOfY = "NO";
        }
    }else if(a1 == a2 && b1 == b2 && c1 != c2){
        typeOfEquation = "No Solution (Parallel Lines)";
        valueOfX = "NO";
        valueOfY = "NO";
    }else{
        typeOfEquation = "Exactly one ordered pair solution";
        valueOfX = ((c1*b2) - (b1*c2)) / ((a1*b2) - (a2*b1))
        valueOfY = ((a1*c2) - (a2*c1)) / ((a1*b2) - (a2*b1))

        valueOfX = Number.isInteger(valueOfX) ? valueOfX : valueOfX.toPrecision(3);
        valueOfY = Number.isInteger(valueOfY) ? valueOfY : valueOfY.toPrecision(3);
    }

    if(validity == true){
        document.getElementById('warning-msg').setAttribute('class','warning-msg');
        document.getElementById('warning-msg').innerText = "";

        document.getElementById('x-result').innerText = valueOfX;
        document.getElementById('y-result').innerText = valueOfY;
        document.getElementById('solution-type').innerText = typeOfEquation;
    }
}

const clearData = () => {
    a1 = document.getElementById('a1').value = "";
    a2 = document.getElementById('a2').value = "";
    b1 = document.getElementById('b1').value = "";
    b2 = document.getElementById('b2').value = "";
    c1 = document.getElementById('c1').value = "";
    c2 = document.getElementById('c2').value = "";

    document.getElementById('x-result').innerText = "";
    document.getElementById('y-result').innerText = "";
    document.getElementById('solution-type').innerText = "";
}