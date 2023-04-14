interface Component {
  getWeight(): number
}

class Good implements Component {
  constructor(protected weight: number = 1) {}

  public getWeight(): number {
    return this.weight  
  }
}

class Container implements Component {
  constructor(private children: Array<Component>) {}

  public getWeight(): number {
    const PACKAGE_WEIGHT = 1
    return this.children.reduce(
      (total, child) => total + child.getWeight(),
      PACKAGE_WEIGHT
    )
  }
}

const container = new Container([
  new Container([new Good(1), new Good(2)]),
  new Good(3)
])
console.log(container.getWeight())

export {}
