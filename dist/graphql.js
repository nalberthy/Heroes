"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressGraphql = require("express-graphql");

var _graphql = require("graphql");

var _controller = require("./heroes/controller");

var _mutation = _interopRequireDefault(require("./heroes/schemas/mutation"));

var _query = _interopRequireDefault(require("./heroes/schemas/query"));

var _types = _interopRequireDefault(require("./heroes/schemas/types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _graphql.buildSchema)(`${_types.default} ${_query.default} ${_mutation.default}`);

const expressGraphql = () => {
  return (0, _expressGraphql.graphqlHTTP)({
    schema,
    rootValue: _controller.resolvers,
    graphiql: true
  });
};

var _default = expressGraphql;
exports.default = _default;