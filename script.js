
function number(value) {
    let inputField = document.querySelector('.result');
    inputField.value += value;
}

function evalua() {
    let inputField = document.querySelector('.result');

    try {
        let result = eval(inputField.value);
        inputField.value = result;
    } catch (error) {
        inputField.value = "Synx Err";
    }
}