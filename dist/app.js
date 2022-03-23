"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupApplication = void 0;

var _express = _interopRequireDefault(require("express"));

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SetupApplication {
  route = "/graphql";

  constructor(port = process.env.PORT || 3001, app = (0, _express.default)()) {
    this.port = port;
    this.app = app;
  }

  start() {
    this.app.use(this.route, (0, _graphql.default)());
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

}

exports.SetupApplication = SetupApplication;