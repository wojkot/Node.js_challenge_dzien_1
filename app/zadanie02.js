//Twój kod

var words = [{ word: "Witam ", interval: 0 }, { word: "się ", interval: 1000 }, { word: "z ", interval: 2000 },
    { word: "programem ", interval: 3000 }, { word: "Node.js ", interval: 4000 }, { word: "w konsoli ", interval: 5000 },
    { word: "i korzystam ", interval: 6000 }, { word: "z funkcji czasu! ", interval: 7000 }];

//words.forEach((val) => {

//    setTimeout(() => { console.log(val.word) }, val.interval);

//});

for (let i = 0; i < words.length; i++) {
    setTimeout(() => { console.log(words[i].word) }, words[i].interval);
}