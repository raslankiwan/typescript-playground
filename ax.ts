// Import stylesheets
import './style.css';
import _ from 'lodash';
// Write TypeScript code!

const input = [
  {
    type: 'COS',
    score: 1,
  },
  {
    type: 'INTERMEDIATE',
    score: 2,
  },
  {
    type: 'COS',
    score: 8,
  },
  {
    type: 'INTERMEDIATE',
    score: 5,
  },
  {
    type: 'INTERMEDIATE',
    score: 1,
  },
  {
    type: 'COS',
    score: 1,
  },
  {
    type: 'COS',
    score: 15,
  },
  {
    type: 'INTERMEDIATE',
    score: 10,
  },
  {
    type: 'INTERMEDIATE',
    score: 12,
  },

  {
    type: 'COS',
    score: 3,
  },
  {
    type: 'INTERMEDIATE',
    score: 5,
  },
  {
    type: 'COS',
    score: 7,
  },
];

const result = _.groupBy(input, 'type');

for (let item in result) {
  console.log(result[item]);
}

const x = {};

x['test'] = {};

x['test']['tyyyyt'] = 3;
console.log(x);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
