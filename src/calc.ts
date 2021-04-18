const calc = {
    sum,
    sub,
    findPercentage,
    isPrimary,
}

function sum(a: number, b: number) {
    return a + b
}

function sub(a: number, b: number) {
    return a - b
}

function findPercentage(a: number, b: number) {
    return (a / 100) * b
}

function isPrimary(a: number) {
    return a % 2
}

module.exports = calc;
