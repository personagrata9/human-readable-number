module.exports = function toReadable (number) {
  let ones = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];

  let ten_nineteen = [
    '', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

 let tens = [
     '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  
let arrnumber = String(number).split('');

if (arrnumber.length === 1) {
    return ones[number];
}


if (arrnumber.length === 2) {
   return number < 20 ? ten_nineteen[Number(arrnumber[0])+Number(arrnumber[1])] : tens[arrnumber[0]]+' '+ones[arrnumber[1]];
}

if (arrnumber.length === 3 && arrnumber[1] == 0 && arrnumber[2] == 0) { 
    return ones[arrnumber[0]]+' hundred';
} else if (arrnumber.length === 3 && arrnumber[1] == 0) {
    return ones[arrnumber[0]]+' hundred '+ones[arrnumber[2]];
} else if (arrnumber.length === 3 && arrnumber[1] == 1) {
    return ones[arrnumber[0]]+' hundred '+ten_nineteen[Number(arrnumber[1])+Number(arrnumber[2])];
} else if (arrnumber.length === 3 && arrnumber[2] == 0) {
    return ones[arrnumber[0]]+' hundred '+tens[arrnumber[1]];
} else {
    return ones[arrnumber[0]]+' hundred '+tens[arrnumber[1]]+' '+ones[arrnumber[2]];
}

}