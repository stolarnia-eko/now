let res_calc = document.querySelector('.calc-res')

function add_digit(digit){
    if (res_calc.innerText == '0'){
        res_calc.innerText = ''
    }
    res_calc.innerText += digit
}
function add_operation(operation){
   
    
}
function delete_input(){
    let res = document.querySelector('.calc-res').innerText
    if (res.length == 1){
        document.querySelector('.calc-res').innerText = '0';
    }
    else{
        document.querySelector('.calc-res').innerText = res.slice(0, -1);
    }
}