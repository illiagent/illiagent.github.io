//выбрали кнопку 
let get = document.getElementById('get');
//отследили нажатие и привязали функцию
get.addEventListener('click', getButtons);
//запустили функцию
function getButtons(n) {
    var n = parseInt(document.getElementById('n').value);
    if (n > 20) {
        alert('ошибка. в калькуляторе может храниться не больше 20 позиций кнопок');
        location.reload()
    } else {
        if (!n) {
            alert('введите целое положительное число');
            location.reload()
        } else {
            //рисуем табло
            let tablo = document.createElement('input');
            tablo.setAttribute('id', 'tablo');
            //делаем недоступность для ввода
            tablo.setAttribute('disabled', 'disabled');
            document.body.append(tablo);
            tablo.setAttribute('value', '0');
            //создаем фрагмент для новых кнопок
            let buttonsFragment = document.createDocumentFragment();
            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttonsDiv');
            //создаем инпуты кнопок
            for (let i = 1; i <= n; i++) {
                let br = document.createElement('br');
                const btnPlus = document.createElement('input');
                const btnMinus = document.createElement('input');
                //plus
                btnPlus.setAttribute('value', `+${i}`);
                btnPlus.setAttribute('type', 'button');
                btnPlus.setAttribute('id', `plus`);
                buttonsFragment.appendChild(btnPlus);
                buttonsFragment.appendChild(br);
                //minus
                btnMinus.setAttribute('value', `-${i}`);
                btnMinus.setAttribute('type', 'button');
                btnMinus.setAttribute('id', `minus`);
                buttonsFragment.appendChild(btnMinus);
                buttonsFragment.appendChild(br);
            }
            //добавляем кнопки в тело HTML
            buttonsDiv.appendChild(buttonsFragment);
            document.body.append(buttonsDiv);
            //чекаем табло
            let count = parseInt(document.getElementById('tablo').value);
            //вешаем листнера на родительский класс с кнопками
            document.querySelector(".buttonsDiv").addEventListener("click", (event) => {
                if (event.target.id === "plus") {
                    count += Math.abs(parseInt(event.target.value));
                    document.getElementById('tablo').value = count;
                } else {
                    count -= Math.abs(parseInt(event.target.value));
                    document.getElementById('tablo').value = count;
                }
            });
        }
    }
}
