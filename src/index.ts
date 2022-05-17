class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Handles an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = temp
          }
        }

        // Handles a string
        if (typeof this.collection === 'string') {
          console.log(this.collection)
        }
      }
    }
  }
}

const numSorter = new Sorter([10, 3, -5, 0])
numSorter.sort()
console.log(numSorter.collection)

const stringSorter = new Sorter('XaxBSE')
stringSorter.sort()
console.log(stringSorter)
