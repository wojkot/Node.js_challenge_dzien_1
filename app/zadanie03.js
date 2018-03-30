//Twój kod
var sum = 0;
process.argv.forEach((value, index) => {
    if (Number(index) > 1) {
        sum += parseInt(value);
    }
});

console.log(sum);