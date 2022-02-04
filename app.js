const result = document.querySelector('.result');
const number = document.querySelector('.number');

const btns = document.querySelectorAll('.button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case '=':
                const action = number.textContent.split('');
                if (action.includes('/') && action[action.length - 1] === '0') {
                    result.textContent = 'Cholero nie dziel przez zero!';
                    number.textContent = '';
                } else {
                    result.textContent = eval(number.textContent);
                    number.textContent = '';
                }
                break;
            case 'CE':
                number.textContent = '0';
                result.textContent = '';
                break;
            case "C":
                number.textContent = '0';
                result.textContent = '';
                break;
            case "+/-":
                number.textContent.startsWith('-') ? number.textContent = number.textContent.replace('-', '') : number.textContent = '-' + number.textContent;
                break;
            case "%":

                const tab = (char) => {
                    const proc = (tab) => {
                        return tab[0] * (tab[1] / 100);
                    }
                    if (char === '+') {
                        let sum = number.textContent.split('+');
                        return Number(sum[0]) + proc(sum);
                    }
                    if (char === '-') {
                        let subtract = number.textContent.split('-');
                        return Number(subtract[0]) - proc(subtract);
                    }
                    if (char === '*') {
                        let multiply = number.textContent.split('*');
                        return Number(multiply[0]) * proc(multiply);
                    }
                    if (char === '/') {
                        let divide = number.textContent.split('/');
                        return Number(divide[0]) / proc(divide);
                    }
                }


                const sum = tab('+');
                const subtract = tab('-');
                const multiply = tab('*');
                const divide = tab('/');

                if (sum) {
                    result.textContent = sum;
                    number.textContent = '';
                }
                if (subtract) {
                    result.textContent = subtract;
                    number.textContent = '';
                }
                if (multiply) {
                    result.textContent = multiply;
                    number.textContent = '';
                }
                if (divide) {
                    result.textContent = divide;
                    number.textContent = ''
                }
                break;
            default:
                number.textContent === '0' ? number.textContent = e.target.textContent : number.textContent += e.target.textContent;
        }
    })
})