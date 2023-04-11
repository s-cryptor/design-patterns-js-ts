interface Prototype {
  clone(): Prototype
}

class House implements Prototype {
  protected address: {
    city: string
    street: string
  }
  protected rooms: Array<string>

  constructor() {
    this.address = {
      city: "Moscow",
      street: "Lenina"
    }
    this.rooms = ["living room", "bedroom", "bedroom", "kitchen", "bathroom"]
  }

  printInfo() {
    console.log("Address:", Object.values(this.address).join(", "))
    console.log("Rooms:", this.rooms.join(", "))
  }

  clone() {
    const instance: House = Object.create(this)
    instance.address = { ...this.address }
    instance.rooms = [...this.rooms]
    return instance
  }
}

const house = new House()
const clone = house.clone()
clone.printInfo()
