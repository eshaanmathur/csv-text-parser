# Csv Text Parser

A utility to parse csv text.

## Install

```bash
npm i csv-text-parser
```

Import it in your code.

```js
// Using commonjs require
const csv = require('csv-text-parser');
// Using es6 import
import csv from 'csv-text-parser';
```

## Usage

```js
const csvText = `
name,greet
Jhon Doe, Hello
Eshaan Mathur, Namaste
`;

const greetings = csv.parse(csvText);

console.log(greetings.map((item) => `${item.greet}, ${item.name}`).join('\n'));
```
