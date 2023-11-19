let res_calc = document.querySelector('.calc-res')

function add_digit(digit){
    if (res_calc.innerText == '0'){
        res_calc.innerText = ''
    }
    res_calc.innerText += digit
}
function add_operation(operation){
    res_calc.innerText += operation
}