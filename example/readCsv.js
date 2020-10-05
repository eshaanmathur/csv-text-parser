const csv = require('../index');

const csvText = `
name,greet
Jhon Doe, Hello
Eshaan Mathur, Namaste
`;

const greetings = csv.parse(csvText);

console.log(greetings.map((item) => `${item.greet}, ${item.name}`).join('\n'));
