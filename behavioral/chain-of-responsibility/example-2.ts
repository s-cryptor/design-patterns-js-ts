interface Handler {
  setNext(handler: Handler): Handler
  handle(request: string): string
}

abstract class AbstractHandler implements Handler {
  protected nextHandler: Handler | null

  constructor() {
    this.nextHandler = null
  }

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  handle(request: string): string {
    if (!this.nextHandler) {
      return request
    }
    return this.nextHandler.handle(request)
  }
}

class Authenticator extends AbstractHandler {
  override handle(request: string): string {
    const PASS = true
    if (!PASS) {
      return `${request} -> authentication fail`
    }

    const result = `${request} -> authentication pass`
    return super.handle(result)
  }
}

class Validator extends AbstractHandler {
  override handle(request: string): string {
    const PASS = true
    if (!PASS) {
      return `${request} -> validation fail`
    }

    const result = `${request} -> validation pass`
    return super.handle(result)
  }
}

const handler = new Authenticator()
handler.setNext(new Validator())
const result = handler.handle("req")
console.log(result)
