
function genaratePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
};

function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
};


document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();

    const pinInputFeild = document.getElementById('pin-input-feild');
    pinInputFeild.value = pin;
    document.getElementById('display-numbers-input').value = '';
    document.getElementById('success').style.display = 'none';
    document.getElementById('faild').style.display = 'none';
});
let count = 3;
document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const pinInputFeild = document.getElementById('pin-input-feild');
    const displayNumbersInput = document.getElementById('display-numbers-input');

    if (isNaN(number)) {
        if (number === 'AC') {
            displayNumbersInput.value = '';

        } else if (number === 'DEL') {
            const displayNumbersInpuValue = displayNumbersInput.value;
            const slice = displayNumbersInpuValue.slice(0, displayNumbersInpuValue.length - 1);
            displayNumbersInput.value = slice;

        } else if (number === 'Submit') {
            const pinInputFeildValue = document.getElementById('pin-input-feild').value;
            const displayNumbersInputValue = document.getElementById('display-numbers-input').value;

            if (pinInputFeildValue !== '' && displayNumbersInputValue !== '') {
                if (pinInputFeildValue === displayNumbersInputValue) {
                    document.getElementById('success').style.display = 'block';
                    document.getElementById('faild').style.display = 'none';
                    pinInputFeild.value = '';
                    displayNumbersInput.value = '';
                } else {
                    document.getElementById('faild').style.display = 'block';
                    displayNumbersInput.value = '';
                    let temp = count -= 1;
                    if (temp < 0) {
                        document.getElementById('submit').setAttribute('disabled', true)
                        return `you don't have chances`
                    }
                    document.getElementById('action-left').innerText = temp;
                }

            } else {
                alert('type number')
            }
        }

    } else {
        displayNumbersInput.value += number;
    }
})
