import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 88, 3, -5, 0])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection.data)

const charCollection = new CharactersCollection('XeRCwa')
const charSorter = new Sorter(charCollection)
charSorter.sort()
console.log(charSorter.collection)
