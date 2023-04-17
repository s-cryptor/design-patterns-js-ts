class Flyweight {
  constructor(private sharedState: any) {}

  public operation(uniqueState): void {
    const s = JSON.stringify(this.sharedState)
    const u = JSON.stringify(uniqueState)
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`)
  }
}

class FlyweightFactory {
  private flyweights: {
    [key: string]: Flyweight
  } = <any>{}

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state)
    }
  }

  private getKey(state: string[]): string {
    return state.join('_')
  }

  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState)

    if (!(key in this.flyweights)) {
      console.log('FlyweightFactory: Can\'t find a flyweight, creating new one')
      this.flyweights[key] = new Flyweight(sharedState)
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.')
    }

    return this.flyweights[key]
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`)
    for (const key in this.flyweights) {
      console.log(key)
    }
  }
}

const factory = new FlyweightFactory([
  ['Chvrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white']
])
factory.listFlyweights()

function addCarToPliceDatabase(
  ff: FlyweightFactory, plates: string, owner: string,
  brand: string, model: string, color: string
) {
  console.log('\nClient: Adding a car to database.')
  const flyweight = ff.getFlyweight([brand, model, color])

  flyweight.operation([plates, owner])
}

addCarToPliceDatabase(factory, 'CL234IR', 'James Dot', 'BMW', 'M5', 'red')
addCarToPliceDatabase(factory, 'CL234IR', 'James Dot', 'BMW', 'X1', 'red')
factory.listFlyweights()
