import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('Anagrams basic functionality tests', () => {
    // 'listen' 'silent'
    // 'elbow' 'below'
    it('Should return true when two known anagram strings are passed in', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.equal(expected);

    })
    // 'elbows' 'below' NOT anagrams
    it('Should return false when number of letters do not match', () => {
        const expected = false;
        const actual1 = isAnagram('elbows', 'below');
        const actual2 = isAnagram('below', 'elbows');
        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
    })

    // 'listens' 'silent' NOT anagrams
    it('Should return false when strings have same lettrs of different quantity', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    })

    // 'conversation' 'voices rant on' ARE anagrams
    it('Should return true since conversation and voices rant on are anagrams', () => {
        const expected = true;
        const actual = isAnagram('conversation', 'voices rant on');
        expect(actual).to.equal(expected);
    })

    // 'TASTE' 'state' ARE anagrams
    it('Should return true since TASTE and state are anagrams', () => {
        const expected = true;
        const actual = isAnagram('TASTE', 'state');
        expect(actual).to.equal(expected);
    })

})
