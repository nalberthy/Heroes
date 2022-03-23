"use strict";

var _app = require("./app");

class Server {
  static start() {
    const application = new _app.SetupApplication();
    application.start();
  }

}

Server.start();