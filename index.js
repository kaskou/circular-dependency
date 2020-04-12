const moduleSum = require('./sum');
console.log(moduleSum,'--in index.js--');

const moduleSub = require('./sub');

new moduleSub().add();
new moduleSum().sub()
