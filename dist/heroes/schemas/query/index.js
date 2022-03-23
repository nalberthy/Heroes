"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const queries = `type Query {
    listHeroes(limit: Int, order: String): [Hero]
    searchHeroes(query: String!, filter: Filter): [Hero]
}`;
var _default = queries;
exports.default = _default;