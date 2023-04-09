interface GUIFactory {
  createButton: () => Button
  createCheckbox: () => Checkbox
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton()
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox()
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton()
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox()
  }
}

interface Button {
  paint: () => void
}

class WinButton implements Button {
  paint() {
    console.log("Render a button in Windows style")
  }
}

class MacButton implements Button {
  paint() {
    console.log("Render a button in macOS style")
  }
}

interface Checkbox {
  paint: () => void
}

class WinCheckbox implements Button {
  paint() {
    console.log("Render a checkbox in Windows style")
  }
}

class MacCheckbox implements Button {
  paint() {
    console.log("Render a checkbox in macOS style")
  }
}

class Application {
  private factory: GUIFactory
  private button: Button

  constructor(factory: GUIFactory) {
    this.factory = factory
  }

  createUI(): void {
    this.button = this.factory.createButton()
  }

  paint(): void {
    this.button.paint()
  }
}

enum OperatingSystem {
  Windows,
  Mac
}

type Config = {
  OS: OperatingSystem
}

const config: Config = {
  OS: OperatingSystem.Windows
}

let factory: null | GUIFactory = null

if (config.OS === OperatingSystem.Windows) {
  factory = new WinFactory()
} else if (config.OS === OperatingSystem.Mac) {
  factory = new MacFactory()
} else {
  throw new Error("Error! Unknown operating system.")
}

const app = new Application(factory)
