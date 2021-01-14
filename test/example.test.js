// IMPORT MODULES under test here:
import { doesUserWin } from '../does-user-win.js';

const test = QUnit.test;

//Tests for win results

test('if player plays rock and computer plays scissors returns win', (expect) => {

    const expected = 'win';

    const actual = doesUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays scissors returns rock', (expect) => {

    const expected = 'win';

    const actual = doesUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays paper returns win', (expect) => {

    const expected = 'win';

    const actual = doesUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

//Tests for draw results
test('if player plays rock and computer plays rock returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays paper returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('paper', 'paper');

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays scissors returns draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});

//Tests for lose results
test('if player plays rock and computer plays paper returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin('rock', 'paper');

    expect.equal(actual, expected);
});

test('if player plays paper and computer plays scissors returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('if player plays scissors and computer plays rock returns lose', (expect) => {

    const expected = 'lose';

    const actual = doesUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});