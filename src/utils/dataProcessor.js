const fs = require('fs');

let content = fs.readFileSync('./uk_final_data.json');
let data = JSON.parse(content);

const dataKeys = Object.keys(data[0]);

const pollingKeys = dataKeys.filter(key => key.search('polling') !== -1);
const twitterProKeys = dataKeys.filter(key => key.search('twitter pro') !== -1);
const twitterConKeys = dataKeys.filter(key => key.search('twitter con') !== -1);
const userProKeys = dataKeys.filter(key => key.search('user pro') !== -1);
const userConKeys = dataKeys.filter(key => key.search('user con') !== -1);
console.log(twitterProKeys);

const pollings = data.map(element => {
  let output = { date: element.date };
  for (let pollingKey of pollingKeys) {
    output[pollingKey.replace(' polling', '')] = Number.parseFloat(
      element[pollingKey]
    );
  }
  return output;
});

const twitterPros = data.map(element => {
  let output = { date: element.date };
  for (let twitterProKey of twitterProKeys) {
    output[twitterProKey.replace(' twitter pro', '')] = Number.parseFloat(
      element[twitterProKey]
    );
  }
  return output;
});

const twitterCons = data.map(element => {
  let output = { date: element.date };
  for (let twitterConKey of twitterConKeys) {
    output[twitterConKey.replace(' twitter con', '')] = Number.parseFloat(
      element[twitterConKey]
    );
  }
  return output;
});

const userPros = data.map(element => {
  let output = { date: element.date };
  for (let userProKey of userProKeys) {
    output[userProKey.replace(' user pro', '')] = Number.parseFloat(
      element[userProKey]
    );
  }
  return output;
});

const userCons = data.map(element => {
  let output = { date: element.date };
  for (let userConKey of userConKeys) {
    output[userConKey.replace(' polling', '')] = Number.parseFloat(
      element[userConKey]
    );
  }
  return output;
});

const finalData = {
  pollings: pollings,
  twitterPros: twitterPros,
  twitterCons: twitterCons,
  userPros: userPros,
  userCons: userCons
};

const outputname = 'uk_final_data_parsed.json';

fs.writeFile(outputname, JSON.stringify(finalData), 'utf8', err => {
  if (err) throw err;
});
