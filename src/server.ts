import { SetupApplication } from './app'

class Server {
  static start (): void {
    const application = new SetupApplication()
    application.start()
  }
}

Server.start()