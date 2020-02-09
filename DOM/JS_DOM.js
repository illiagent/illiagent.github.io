//запуск функции кнопкой starts
function test() {
    let numbersArr = [];

    function change(n) {
        if (Number.isInteger(n) && n > 0) {
            for (let k = 1; k <= n; k++) {
                numbersArr.push(k)
            };
            for (let i = 0; i < numbersArr.length; i++) {
                if (numbersArr[i] % 3 === 0 && numbersArr[i] % 5 === 0) {
                    numbersArr[i] = "fizzbuzz"
                } else if (numbersArr[i] % 5 === 0) {
                    numbersArr[i] = "buzz"
                } else if (numbersArr[i] % 3 === 0) {
                    numbersArr[i] = "fizz"
                }
            }
            //создаем хранилище для строк списка
            const fragment = document.createDocumentFragment();
            //создание списка + класса
            const note = document.createElement('ul');
            note.classList.add('noteTest')
                //добавление элементов полученного массива в список      
            numbersArr.forEach(numbersArr => {
                const item = document.createElement('li');
                item.textContent = numbersArr;
                fragment.appendChild(item);
            });
            //добавляем строки li из хранилища в список
            note.appendChild(fragment);
            //добавляем список в тело документа
            document.body.append(note);
            //меняем исходный h3
            const h3 = document.querySelector('h3');
            h3.innerHTML = `Числовой ряд от 1 до ${numbersArr.length}`;
            h3.style.color = 'green';
            //меняем исходный h2
            const h2 = document.querySelector('h2');
            h2.innerHTML = `Результат преобразования:`
            h2.style.color = 'green';
        } else {
            const warning = document.createElement('div');
            warning.classList.add('warning');
            warning.innerHTML = "ошибка. введите целое число";
            document.body.append(warning);
        }
    }
    //запуск функции со значением из inputa
    change(parseInt(document.getElementById('uni').value));
};