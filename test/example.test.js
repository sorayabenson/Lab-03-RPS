// IMPORT MODULES under test here:
import { doesUserWin } from '../does-user-win.js';

const test = QUnit.test;

//Tests for win results

test('if player plays rock and computer plays scissors returns win', (expect) => {

    const expected = 'win';

    const actual = doesUserWin(1, 3);

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays scissors returns rock', (expect) => {

    const expected = 'win';

    const actual = doesUserWin(2, 1);

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays paper returns win', (expect) => {

    const expected = 'win';

    const actual = doesUserWin(3, 2);

    expect.equal(actual, expected);
});

//Tests for draw results
test('if player plays rock and computer plays rock returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin(1, 1);

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays paper returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin(2, 2);

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays scissors returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin(3, 3);

    expect.equal(actual, expected);
});

//Tests for lose results
test('if player plays rock and computer plays paper returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin(1, 2);

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays scissors returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin(2, 3);

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays rock returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin(3, 1);

    expect.equal(actual, expected);
});