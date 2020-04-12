class ModuleSum {
    sub(){
        new moduleSub().sub();
    }
}

module.exports = ModuleSum;

var moduleSub = require('./sub');
console.log(moduleSub, 'in Addition class');

ModuleSum.prototype.add = function(){
    console.log(2+3);
}



