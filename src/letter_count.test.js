import { getLetterCount } from './letter_count'
import { expect } from 'chai'

describe('getLetterCount basic functionality', () => {

    it('returns an empty object when passed an empty string', () => {
        const expected = {}
        const actual = getLetterCount('')
        expect(expected).to.deep.equal(actual)
    })

    it('return the correct letter count for a word with only one character each', () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount('cat');
        expect(expected).to.deep.equal(actual)
    })

    it('return the correct letter count for a word with more than one of certail letters', () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = getLetterCount('mississippi');
        expect(expected).to.deep.equal(actual)
    })
})