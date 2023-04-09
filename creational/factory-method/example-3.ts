abstract class Creator {
  public abstract factoryMethod(): Product

  public someOperation(): string {
    const product = this.factoryMethod()
    return `Creator: The same creator's code has just worked with ${product.opertion()}`
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1()
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2()
  }
}

interface Product {
  opertion(): string
}

class ConcreteProduct1 implements Product {
  public opertion(): string {
    return '{Result of the ConcreteProduct1}'
  }
}

class ConcreteProduct2 implements Product {
  public opertion(): string {
    return '{Result of the ConcreteProdcut2}'
  }
}

function clientCode(creator: Creator) {
  console.log(`Client: I'm not aware of the creator's class, but it still works`)
  console.log(creator.someOperation())
}

console.log('App: Launched with the ConcreteCreator1')
clientCode(new ConcreteCreator1())

console.log('App: Launched with the ConcreteCreator2')
clientCode(new ConcreteCreator2())
