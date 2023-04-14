class Abstraction {
  constructor(protected implemetation: Implementation) {}

  public operation(): string {
    const result = this.implemetation.operationImplementation()
    return `Abstraction: Base operation with:\n${result}`
  }
}

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implemetation.operationImplementation()
    return `ExtendedAbstraction: Base operation with:\n${result}`
  }
}

interface Implementation {
  operationImplementation(): string
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.'
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.'
  }
}

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation())
}

let implemetation = new ConcreteImplementationA()
let abstraction = new Abstraction(implemetation)
clientCode(abstraction)

console.log('')

implemetation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implemetation)
clientCode(abstraction)
