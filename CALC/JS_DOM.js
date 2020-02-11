//выбрали кнопку 
let get = document.getElementById('get');
//отследили нажатие и привязали функцию
get.addEventListener('click', getButtons);
//запустили функцию

function getButtons(n) {

    var n = parseInt(document.getElementById('n').value);
    if (n > 20) {
        alert('ошибка. в калькуляторе может храниться не больше 20 позиций кнопок');
    } else {
        //рисуем табло
        let tablo = document.createElement('input');
        tablo.setAttribute('id', 'tablo');
        tablo.setAttribute('disabled', 'disabled');
        document.body.append(tablo);
        tablo.setAttribute('value', '0');
        //создаем фрагмент для новых кнопок
        let newButtons = document.createDocumentFragment();
        let btns = document.createElement('div');
        btns.classList.add('newButtons');

        //создаем инпуты кнопок
        for (let i = 1; i <= n; i++) {
            let br = document.createElement('br');
            const itemPlus = document.createElement('input');
            const itemMinus = document.createElement('input');
            //plus
            itemPlus.setAttribute('type', 'button');
            itemPlus.setAttribute('id', `plus${i}`);
            itemPlus.setAttribute('value', `+${i}`);
            newButtons.appendChild(itemPlus);
            newButtons.appendChild(br);
            //minus
            itemMinus.setAttribute('type', 'button');
            itemMinus.setAttribute('id', `minus${i}`);
            itemMinus.setAttribute('value', `-${i}`);
            newButtons.appendChild(itemMinus);
            newButtons.appendChild(br);
        }
        //добавляем кнопки в тело HTML
        btns.appendChild(newButtons);
        document.body.append(btns);
        //чекаем табло
        let count = parseInt(document.getElementById('tablo').value);
        //трекаем новые кнопки
        let div = document.querySelector('.newButtons');
        let inputsDiv = div.querySelectorAll('input')
        for (let k = 0; k < inputsDiv.length; k++) {
            let plusBTN = inputsDiv[k];
            plusBTN.addEventListener('click', function() {
                count += parseInt(inputsDiv[k].value);
                document.getElementById('tablo').value = count;
            })
        }
    }
}
