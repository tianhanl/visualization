const Papa = require('papaparse/papaparse.js');
const fs = require('fs');

const readCSVFromLocal = (address) => {
    let csvData = fs.readFileSync(__dirname + address, 'utf8');
    return new Promise((resolve, reject) => {
        resolve(Papa.parse(csvData, {
            header: true
        }));
    });
};

module.exports = {
    readCSVFromLocal
};