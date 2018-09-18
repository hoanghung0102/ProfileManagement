export const simpleStore = {
  state: {
    numbers: [1, 2, 3]
  },
  addNumber (newNumber) {
    this.state.numbers.push(+newNumber)
  }
}
