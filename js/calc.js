let res_calc = document.querySelector('.calc-res')

function add_digit(digit){
    if (res_calc.innerText == '0'){
        res_calc.innerText = ''
    }
    res_calc.innerText += digit
}