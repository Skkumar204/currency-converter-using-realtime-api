const select = document.querySelectorAll('.currency')

let btn = document.getElementById('btn')




fetch('https://api.frankfurter.app/currencies')
    .then((msg) => msg.json())
    .then((res) => todisplay(res))


function todisplay(res) {
    let droparray = Object.entries(res)

    for (let i = 0; i < droparray.length; i++) {
        const opt = `<option value="${droparray[i][0]}">${droparray[i][0]}</option>`

        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}

let input = document.getElementById('input')
let result = document.getElementById('result')


btn.addEventListener('click', () => {
    let cur1 = select[0].value
    let cur2 = select[1].value

    if (cur1 === cur2)
        alert('choose different country!!!')
    else {
       convert(cur1, cur2, input.value)
    }
})

function convert (cur1,cur2,input){

    const host = 'api.frankfurter.app';

    fetch(`https://${host}/latest?amount=${input}&from=${cur1}&to=${cur2}`)
        .then(resp => resp.json())
        .then((data) => {
           const s = Object.values(data.rates);
           result.value= s[0];
        });
}
