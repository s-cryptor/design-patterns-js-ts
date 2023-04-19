interface Subject {
  request(): void
}

class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.')
  }
}

class CustomProxy implements Subject {
  constructor(private realSubject: RealSubject) {}

  private checkAccess(): boolean {
    console.log('CustomProxy: Checking access prior to firing a real request.')
    return true
  }

  private logAccess(): void {
    console.log('CustomProxy: Logging the time of request.')
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }
}

function clientCode(subject: Subject) {
  subject.request()
}

console.log('Client: Executing the client code with a real subject:')
const realSubject = new RealSubject()
clientCode(realSubject)

console.log('')

console.log('Client: Executing the same client code with a Customproxy:')
const proxy = new CustomProxy(realSubject)
clientCode(proxy)
