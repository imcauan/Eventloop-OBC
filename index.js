const { error } = require('console');
const fs = require('node:fs');
console.log("Início");

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if(err) throw error
    console.log(data);
})

console.log("Fim");