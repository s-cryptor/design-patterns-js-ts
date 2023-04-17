interface Address {
  country: string
  province: string
  city: string
  street: string
  number: number
}

class Family {
  constructor(public address: Address) {}
}

class FamilyFactory {
  private families: Record<string, Family>

  constructor() {
    this.families = {}
  }

  private getCacheKey(address: Address): string {
    return address.street + '-' + address.number
  }

  public getFamily(address: Address): Family {
    const key = this.getCacheKey(address)
    if (!this.families[key]) {
      this.families[key] = new Family(address)
    }
    return this.families[key] as Family
  }
}

class Member {
  constructor(private family: Family, private name: string) {}

  getInfo() {
    return JSON.stringify({ ...this.family.address, name: this.name })
  }
}

const familyFactory = new FamilyFactory()
const family = familyFactory.getFamily({
  country: 'China',
  province: 'Sichuan',
  city: 'Chengdu',
  street: 'Rd.Jiefang',
  number: 206
})
const father = new Member(family, 'William')
const mother = new Member(family, 'Jessica')
const son = new Member(family, 'Bob')
console.log(father.getInfo())
console.log(mother.getInfo())
console.log(son.getInfo())
