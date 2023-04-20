interface Command {
  execute(): void
}

class SimpleCommand implements Command {
  constructor(private payload: string) {}

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`)
  }
}

class ComplexCommand implements Command {
  constructor(
    private receiver: Receiver,
    private a: string,
    private b: string
  ) {}

  public execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.')
    this.receiver.doSomething(this.a)
    this.receiver.doSomethingElse(this.b)
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a})`)
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b})`)
  }
}

class Invoker {
  private onStart: Command
  private onFinish: Command

  private isCommand(object: any): object is Command {
    return object.execute !== undefined
  }

  public setOnStart(command: Command): void {
    this.onStart = command
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command
  }

  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?')
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute()
    }
  }
}

const invoker = new Invoker()
invoker.setOnStart(new SimpleCommand('Say Hi!'))
const receiver = new Receiver()
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'))

invoker.doSomethingImportant()

export {}
