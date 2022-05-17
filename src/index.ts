import { Sorter } from './Sorter'
// import { NumbersCollection } from './NumbersCollection'
// import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// const numbersCollection = new NumbersCollection([10, 88, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection.data)

// const charCollection = new CharactersCollection('XeRCwa')
// const charSorter = new Sorter(charCollection)
// charSorter.sort()
// console.log(charSorter.collection.data)

const linkedList = new LinkedList()

linkedList.add(832)
linkedList.add(0)
linkedList.add(-55)
linkedList.add(8)

linkedList.print()
console.log('\n\n')

const sorter = new Sorter(linkedList)

sorter.sort()

linkedList.print()
