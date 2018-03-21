const { readCSVFromLocal } = require('./parse');
const fs = require('fs');

const filename = '/fianl_result.csv';
const outputname = 'final_result.json';

readCSVFromLocal(filename)
    .then(results => {
        console.log(results.data);
        let content = JSON.stringify(results.data);
        fs.writeFile(outputname, content, 'utf8', err => {
            if (err) throw err;
        });
    })
    .catch(error => {
        console.log(error);
    });