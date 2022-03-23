"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Service {
  constructor() {
    this.allSuperHeroes = undefined;
    this.axios = _axios.default.create({
      baseURL: 'https://akabab.github.io/superhero-api/api'
    });
  }

  listMapHeroes(hero) {
    const {
      powerstats,
      appearance,
      work,
      biography,
      connections,
      images
    } = hero;
    return {
      id: hero.id,
      name: hero.name,
      slug: hero.slug,
      intelligence: powerstats.intelligence,
      strength: powerstats.strength,
      speed: powerstats.speed,
      durability: powerstats.durability,
      power: powerstats.power,
      combat: powerstats.combat,
      gender: appearance.gender,
      race: appearance.race,
      height: appearance.height,
      weight: appearance.weight,
      eyeColor: appearance.eyeColor,
      hairColor: appearance.hairColor,
      fullName: biography.fullName,
      alterEgos: biography.alterEgos,
      aliases: biography.aliases,
      placeOfBirth: biography.placeOfBirth,
      firstAppearance: biography.firstAppearance,
      publisher: biography.publisher,
      alignment: biography.alignment,
      occupation: work.occupation,
      base: work.base,
      groupAffiliation: connections.groupAffiliation,
      relatives: connections.relatives,
      xs: images.xs,
      sm: images.sm,
      md: images.md,
      lg: images.lg
    };
  }

  static getInstance() {
    if (!this.instance) {
      return this.instance = new Service();
    }

    return this.instance;
  }

  async getAllSuperHeroes() {
    try {
      if (!this.allSuperHeroes) {
        this.allSuperHeroes = await (await this.axios.get("/all.json")).data.map(this.listMapHeroes);
      }

      return this.allSuperHeroes;
    } catch (error) {
      return [];
    }
  }

  createHero(hero) {
    if (!this.allSuperHeroes) {
      this.allSuperHeroes = [hero];
    }

    return this.allSuperHeroes.push(hero);
  }

}

var _default = Service;
exports.default = _default;