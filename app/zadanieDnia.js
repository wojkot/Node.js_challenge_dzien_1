//Twój kod

process.argv.forEach((val, index) => {

    if (index > 1) {
        setTimeout(() => { console.log(val); }, Number(val)*1000)
    }
});