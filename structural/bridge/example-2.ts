interface Database {
  query(): void
}

class PostgreSQL implements Database {
  public query(): void {
    console.log("Query with PostgreSQL.")
  }
}

class MongoDB implements Database {
  public query(): void {
    console.log("Query with MongoDB.")
  }
}

interface Backend {
  handle(): void
}

class Express implements Backend {
  constructor(protected database: Database) {}

  public handle(): void {
    console.log("Handle with Express.")
    this.database.query()
  }
}

class NestJS implements Backend {
  constructor(protected database: Database) {}

  public handle(): void {
    console.log("Handle with NestJS.")
    this.database.query()
  }
}

const app1 = new Express(new PostgreSQL())
app1.handle()

const app2 = new NestJS(new MongoDB())
app2.handle()
