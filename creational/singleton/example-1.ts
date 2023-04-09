class Database {
  private static instance: Database
  name: string

  private constructor(name: string = "MongoDB") {
    this.name = name
  }

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}

const h1 = Database.getInstance()
const h2 = Database.getInstance()
// @ts-expect-error
const h3 = new Database()

console.log(h1 === h2)
