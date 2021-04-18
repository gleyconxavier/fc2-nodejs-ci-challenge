const calc = {
    sum,
    sub,
    findPercentage,
    isPrimary,
}

function sum(a, b: number) {
    return a + b
}

function sub(a, b: number) {
    return a - b
}

function findPercentage(a, b: number) {
    return (a / 100) * b
}

function isPrimary(a: number) {
    return a % 2
}

module.exports = calc;
