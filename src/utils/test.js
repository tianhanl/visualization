const { readCSVFromLocal } = require('./parse');
const fs = require('fs');

const filename = '/data/uk_final_data.csv';
const outputname = 'uk_final_data.json';

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
