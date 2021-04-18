const calcTest = require('./calc')

test('Add 123 + 321 to be equal (444)', () => {
    expect(calcTest.sum(123, 321)).toBe(444)
})

test('Sub 123 - 321 to be equal (222)', () => {
    expect(calcTest.sub(123, 321)).toBe(-198)
})

test('Expect to 10% of 2000 to be (200)', () => {
    expect(calcTest.findPercentage(2000, 10)).toBe(200)
})

test('Expect 2000 to be primary (0)', () => {
    expect(calcTest.isPrimary(2000)).toBe(0)
})
