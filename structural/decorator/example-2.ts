interface API {
  handle(request: string): string
}

class UserAPI implements API {
  handle(request: string): string {
    return ` -> Handle request: ${request}`
  }
}

class Authenticator implements API {
  constructor(protected api: API) {}

  handle(request: string): string {
    return ` -> authentication pass ${this.api.handle} -> jwt token given`
  }
}

const api = new Authenticator(new UserAPI())
console.log(api.handle("request"))

export {}
