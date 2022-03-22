import express from 'express'
import { Server } from 'http'
import expressGraphql from './graphql'

class SetupApplication {
    private server?: Server
    private route = "/graphql"
    constructor (private port = process.env.PORT || 3001, public app = express()) {}
  

    public start (): void {
      this.app.use(this.route, expressGraphql())
      this.server = this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`)
      })
    }
  }
  
  export { SetupApplication }