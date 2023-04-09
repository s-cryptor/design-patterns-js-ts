class House {
  rooms: Array<string>

  constructor() {
    this.rooms = []
  }
}

class HouseBuilder {
  protected house: House

  constructor() {
    this.house = new House()
  }

  buildLivingRoom(): HouseBuilder {
    this.house.rooms.push("living room")
    return this
  }

  buildBedroom(): HouseBuilder {
    this.house.rooms.push("bedroom")
    return this
  }

  buildBathRoom(): HouseBuilder {
    this.house.rooms.push("bathroom")
    return this
  }

  buildKitchen(): HouseBuilder {
    this.house.rooms.push("kitchen")
    return this
  }

  reset(): HouseBuilder {
    this.house = new House()
    return this
  }

  getHouse(): House {
    const house = this.house
    this.reset()
    return house
  }
}

const builder = new HouseBuilder()
const house = builder
  .buildLivingRoom()
  .buildBedroom()
  .buildBedroom()
  .buildKitchen()
  .buildBathRoom()
  .getHouse()

console.log(house.rooms)
