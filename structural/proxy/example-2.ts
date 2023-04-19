interface API {
  handleRequest(request: string): string
}

class UserAPI implements API {
  public handleRequest(request: string): string {
    return `Handle request: ${request}`
  }
}

class UserAPIProxy implements API {
  constructor(protected api: API = new UserAPI()) {}

  public handleRequest(request: string): string {
    console.log("Authentication pass.")
    return this.api.handleRequest(request)
  }
}

const api = new UserAPIProxy()
api.handleRequest("req")
