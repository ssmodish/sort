// import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 88, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charCollection = new CharactersCollection('XeRCwa')
charCollection.sort()
console.log(charCollection.data)

const linkedList = new LinkedList()

linkedList.add(832)
linkedList.add(0)
linkedList.add(-55)
linkedList.add(8)

linkedList.print()
console.log('\n\n')

linkedList.sort()

linkedList.print()
