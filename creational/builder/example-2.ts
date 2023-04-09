interface Builder {
  producePartA(): Builder
  producePartB(): Builder
  producePartC(): Builder
}

class ConcreteBuilder1 implements Builder {
  private product: Product1

  constructor() {
    this.reset()
  }

  public reset(): void {
    this.product = new Product1()
  }

  public producePartA(): ConcreteBuilder1 {
    this.product.parts.push('PartA1')
    return this
  }

  public producePartB(): ConcreteBuilder1 {
    this.product.parts.push('PartB1')
    return this
  }

  public producePartC(): ConcreteBuilder1 {
    this.product.parts.push('PartC1')
    return this
  }

  public getProduct(): Product1 {
    const result = this.product
    this.reset()
    return result
  }
}

class Product1 {
  public parts: Array<string> = []

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`)
  }
}

class Director {
  private builder: Builder

  public setBuilder(builder: Builder): void {
    this.builder = builder
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA()
  }

  public buildFullFeaturedProduct(): void {
    this.builder
      .producePartA()
      .producePartB()
      .producePartC()
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1()
  director.setBuilder(builder)

  console.log('Standard basic product:')
  director.buildMinimalViableProduct()
  builder.getProduct().listParts()

  console.log('Standard full featured product:')
  director.buildFullFeaturedProduct()
  builder.getProduct().listParts()

  console.log('Custom product:')
  builder
    .producePartA()
    .producePartC()
    .getProduct()
    .listParts()
}

const director = new Director()
clientCode(director)
