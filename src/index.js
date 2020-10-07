module.exports = function toReadable (number) {
  let num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let onePlus = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dec = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let readableNumber = '';
    if (number === 0) {
      return 'zero';
    }
    number = '' + number;
    if (number.length === 1){
        return num[+number - 1];
    } else if (number.length === 2){
        if (+number[0] === 1 && +number[1] !== 0){
            return onePlus[+number[1] - 1];
        }
        res = dec[+number[0] - 1];
        if (+number[1] !== 0){
            res += ` ${num[+number[1] - 1]}`
        }
        return res;
    } else {
        res = num[+number[0] - 1] + ' hundred';
        if (+number[1] === 1 && +number[2] !== 0) {
            return res + ` ${onePlus[+number[2] - 1]}`;
        }
        if (+number[1] !== 0) {
            res += ` ${dec[+number[1] - 1]}`;
        }
        if (+number[2] !== 0) {
            res += ` ${num[+number[2] - 1]}`;
        }
        return res;
    }
}
