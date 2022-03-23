"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault(require("../service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hero = {
  async listHeroes({
    order,
    limit
  }) {
    const service = _service.default.getInstance();

    const listHeroes = await service.getAllSuperHeroes();

    if (order) {
      listHeroes.sort((a, b) => {
        const compareA = typeof a[order] === "string" ? a[order].toString().toLowerCase() : a[order];
        const compareB = typeof b[order] === "string" ? b[order].toString().toLowerCase() : b[order];

        if (compareA < compareB) {
          return -1;
        }

        if (compareA > compareB) {
          return 1;
        }

        return 0;
      });
    }

    return listHeroes.slice(0, limit);
  },

  async searchHeroes({
    filter,
    query
  }) {
    const service = _service.default.getInstance();

    const listHeroes = await service.getAllSuperHeroes();
    return listHeroes.filter(hero => {
      let attributes = [];

      switch (filter) {
        case "name":
          attributes = [hero.name];
          break;

        case "appearance":
          attributes = [hero.gender, hero.race, hero.height, hero.weight, hero.eyeColor, hero.hairColor];
          break;

        case "biography":
          attributes = [hero.fullName, hero.alterEgos, hero.aliases, hero.placeOfBirth, hero.firstAppearance, hero.publisher, hero.alignment];
          break;

        case "work":
          attributes = [hero.occupation, hero.base];
          break;

        case "connections":
          attributes = [hero.groupAffiliation, hero.relatives];
          break;

        default:
          attributes = Object.values(hero);
      }

      const result = attributes.filter(value => {
        if (value === null) return false;
        return value.toString().toLowerCase().indexOf(query.toLowerCase()) != -1;
      });
      if (result.length != 0) return true;
      return false;
    });
  },

  async createHero({
    data
  }) {
    const service = _service.default.getInstance();

    const listHeroes = await this.listHeroes({
      order: "id"
    });
    const lastId = listHeroes.at(-1)?.id || 0;
    const newHero = { ...data,
      id: lastId + 1,
      slug: `${lastId + 1}-${data.name.split(' ').reduce((a, c, i) => {
        return a[0] != a[i] || a.at(-1) != a[i] ? `${a}-${c}` : c;
      }, '').toLowerCase()}`
    };
    service.createHero(newHero);
    return newHero;
  }

};
var _default = hero;
exports.default = _default;