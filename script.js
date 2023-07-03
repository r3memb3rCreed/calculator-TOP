const calInput = document.querySelector('.calc-input');
const allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === '=') {
            if (calInput.innerText.includes('/')){
                const splitStuff = calInput.innerHTML.split('/');
                operate('/', splitStuff[0], splitStuff[1]);
            }

            if (calInput.innerText.includes('-')){
                const splitStuff = calInput.innerHTML.split('-');
                operate('-', splitStuff[0], splitStuff[1]);
            }
            
            if (calInput.innerText.includes('+')){
                const splitStuff = calInput.innerHTML.split('+');
                operate('+', splitStuff[0], splitStuff[1]);
            }
            
            if (calInput.innerText.includes('*')){
                const splitStuff = calInput.innerHTML.split('*');
                operate('*', splitStuff[0], splitStuff[1]);
            }
        }
        calInput.innerText += value

        if (value === 'clear') {
            calInput.innerText = '';
        }
            
    });
})

const operate = (operator, value1, value2) => {
    const num1 = Number(value1);
    const num2 = Number(value2);
    
    if (operator === '/') {
        calInput.innerText = num1 / num2
    }

    if (operator === '-') {
        calInput.innerText = num1 - num2        
    }

    if (operator === '+') {
        calInput.innerText = num1 + num2
    }

    if (operator === '*') {
        calInput.innerText = num1 * num2
    }
}