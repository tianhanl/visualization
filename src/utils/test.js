const { readCSVFromLocal } = require('./parse');

readCSVFromLocal('/uk_polling.csv')
    .then(results => {
        console.log(results);
    }).catch(error => {
        console.log(error)
    });