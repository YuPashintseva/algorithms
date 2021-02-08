const buttons = [
    [1, 2, 'a', 'b', 'c', 3, 'd', 'e', 'f'],
    [4, 'g','h', 'i', 5, 'j', 'k', 'l', 6, 'm','n', 'o'],
    [7, 'p', 'q', 'r', 's', 8, 't', 'u', 'v', 9, 'w', 'x', 'y', 'z'],
    ['*', '0', '#']
]


function mobileRemote(text) {
        let counter = 0;
        let countUpper = 0;
        let letterArr = text.split('');
        for (let i = 0; i < letterArr.length; i += 1) {
            letterArr[i] === letterArr[i].toUpperCase() ? countUpper += buttons.length*2 : null;
            for (let j = 0; j < buttons.length;  j += 1) {
                let position = buttons[j].indexOf(letterArr[i].toLowerCase());
                position === -1 ? counter = counter : counter += position + 1;
            }
        }
        return counter;
}


console.log(mobileRemote('C')); // 10
console.log(mobileRemote('yandex')); // 34