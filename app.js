const calc = document.querySelector('.calc')
const result = document.getElementById('result')

calc.addEventListener('click', calculate)

function calculate(event) {
    if(!event.target.classList.contains('calc__btn')) return
    const btn = event.target.innerText
    console.log(btn);
    switch(btn) {
        case 'C': result.innerText = ''
            break
        case '=':  result.innerText = eval(result.innerText).toFixed(3)
    if(result.innerText.search(/[^0-9*/+-.%]/mi) != -1) return

            break
        case '⌫': result.innerText = result.innerText.slice(0, -1)
            break
        default: result.innerText += btn
            break
    }
}