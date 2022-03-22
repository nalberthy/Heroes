import axios, { AxiosInstance } from "axios";
import { IHero, IHeroResponse } from "../interface/hero";

class Service {
    private static instance: Service;
    private axios: AxiosInstance;
    private allSuperHeroes: IHero[] | undefined;

    
    private constructor () {
        this.allSuperHeroes = undefined;
        this.axios = axios.create({
            baseURL: 'https://akabab.github.io/superhero-api/api',
          });
    }

    
    private listMapHeroes (hero: IHeroResponse) {
        const { powerstats, appearance, work, biography, connections, images}= hero
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
        }
    }

    static getInstance() {
        if(!this.instance) {
            return this.instance = new Service();
        }
        return this.instance;
    }
    async getAllSuperHeroes() {
        try {
            if(!this.allSuperHeroes) {
                this.allSuperHeroes = await (await this.axios.get<IHeroResponse[]>("/all.json")).data.map(this.listMapHeroes)
            }
            return this.allSuperHeroes;
        } catch (error) {
            return []
        }
    }
}

export default Service;