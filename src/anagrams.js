import { isEqual } from 'lodash'
import { getLetterCount } from './letter_count'

export const isAnagram = (string1, string2) => {
    const string1WithoutSpaces = string1.replace(/\s/g, "")
    const string2WithoutSpaces = string2.replace(/\s/g, "")
    const string1LetterCount = getLetterCount(string1WithoutSpaces.toLowerCase())
    const string2LetterCount = getLetterCount(string2WithoutSpaces.toLowerCase())

    return isEqual(string1LetterCount, string2LetterCount)
}