function concatStrings(initialString, separator){
    let result = initialString || '';
    
    function innerConcat(nextString, nextSeparator){
        if(typeof nextString === 'string'){
            result += (nextSeparator || '') + nextString;
        }
        return innerConcat;
    }
    innerConcat.toString = function(){
        return result;
    };
    return innerConcat;
};

class Calculator {
    constructor(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || !this.isValidNumber(num1) || !this.isValidNumber(num2)) {
            throw new Error('Передано невалидное число');
        }

        this.num1 = num1;
        this.num2 = num2;

        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    randomNumberGenerator() {
        const min = 1;
        const max = 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    isValidNumber(value) {
        return typeof value === 'number' && isFinite(value) && !isNaN(value);
    }

    setX(num1) {
        if (typeof num1 !== 'number' || !this.isValidNumber(num1)) {
            throw new Error('Передано невалидное число');
        } else {
            this.num1 = this.randomNumberGenerator();
        }
    }

    setY(num2) {
        if (typeof num2 !== 'number' || !this.isValidNumber(num2)) {
            throw new Error('Передано невалидное число');
        } else {
            this.num2 = this.randomNumberGenerator();
        }
    }

    logSum() {
        return this.num1 + this.num2;
    }

    logMul() {
        return this.num1 * this.num2;
    }

    logSub() {
        return this.num1 - this.num2;
    }

    logDiv() {
        if (this.num2 === 0) {
            throw new Error('Нельзя делить на ноль.');
        }
        return this.num1 / this.num2;
    }
}

