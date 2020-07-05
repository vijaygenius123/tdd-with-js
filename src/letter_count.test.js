
import { getLetterCount } from './letter_count'
import { expect } from 'chai'

describe('getLetterCount basic functionality', () => {

    it('returns an empty object when passed an empty string', () => {
        const expected = {}
        const actual = getLetterCount('')
        expect(expected).to.deep.equal(actual)
    })
})