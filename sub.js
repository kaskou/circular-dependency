var moduleSum = require('./sum');
console.log(moduleSum, 'in Subtraction class');

class ModuleSub {
    add(){
        new moduleSum().add();
    }
}

module.exports = ModuleSub;

ModuleSub.prototype.sub = function(){
    console.log(3-2);
}


