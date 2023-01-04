module.exports = function reverse (n) {
    let newNum = parseInt(n.toString().split('').reverse().join(''));
    return newNum;
};
// function reverseInt(num) {
//     let newNum = parseInt(num.toString().split('').reverse().join(''));
//     // return newNum;
//     console.log(newNum);
// }


// reverseInt(-1592);
