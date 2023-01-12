module.exports = function toReadable (number) {
    
    if (number == 0) return 'zero';

    let words = [];
    let numberAsString = String(number);
    let length = numberAsString.length;
    let rest = length%3;

    if (rest) { numberAsString =  (rest == 1) ? '00' + numberAsString : '0' + numberAsString; }

    let result = numberAsString.match(/.{1,3}/g) || [];

    for(let i = 0; i < result.length; i++) {
        if (foo(result[i], result.length, i))
            words.push(foo(result[i], result.length, i));
    }
    
    return words.join(' ');

    function foo(number, length, i){

        if(!(+number)) { return ''; }

        let selecter = length - i - 1;
        let isExpOne = false;
        let bar =           ['hundred','thousand', 'million', 'billion','trillion'];
        let oneToNine =     ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let tens =          ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        let tenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

        if (+number[0]) {
            words.push(oneToNine[+number[0]]);
            words.push(bar[0]);
        }

        if (+number[1] == 1) {
            isExpOne = true;
        } else {
            if (+number[1]) {
                words.push(tens[+number[1]]);
            }
        }

        if (isExpOne) {
            words.push(tenToNineteen[+number[2]]);
        } else {
                if(+number[2]) {
                     words.push(oneToNine[+number[2]]);
                }        
        }

        if (length-i > 1) {
             words.push(bar[selecter]);
        }

    }
}
