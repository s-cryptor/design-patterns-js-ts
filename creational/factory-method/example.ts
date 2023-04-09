interface Transportation {
  carry: (parcel: string) => void
}

abstract class Logistics {
  // Not concerned with specific implementation details
  protected abstract createTranportation(): Transportation

  // Only care about macro business logic
  deliver(parcel: string): void {
    const transportation = this.createTranportation()
    console.log("Shipping")
    transportation.carry(parcel) // No matter what kind of transportation, you can `carry` on it
    console.log("Receipt of goods")
  }
}

class Ship implements Transportation {
  carry(parcel: string): void {
    console.log("Shipping of", parcel)
  }
}

class SeaLogistics extends Logistics {
  // Replace the abstract "transportation" with the concrete "ship"
  protected createTranportation(): Transportation {
    return new Ship()
  }
}

class Plane implements Transportation {
  carry(parcel: string): void {
    console.log("Shipping of", parcel)
  }
}

class AirLogistics extends Logistics {
  // Replace the abstract "transportation" with the concrete "plane"
  protected createTranportation(): Transportation {
    return new Plane()
  }
}

const airLogistics = new AirLogistics()
airLogistics.deliver("Seafood")
const seaLogistics = new SeaLogistics()
seaLogistics.deliver("Chairs")
