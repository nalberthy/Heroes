import { IHero } from "../interface/hero";
import Service from "../service";

interface IListHeroesParams {
    limit?: number;
    order?: keyof IHero;
}
interface ISearchHeroesParams {
    query: string;
    filter?: string;
}


const hero = {
    async listHeroes({order,limit}: IListHeroesParams) {
        const service = Service.getInstance();
        const listHeroes = await service.getAllSuperHeroes()

        if (order){
            listHeroes.sort(
                (a, b) => {                 
                    const compareA = typeof  a[order] === "string" ? a[order].toString().toLowerCase() : a[order]
                    const compareB = typeof  b[order] === "string" ? b[order].toString().toLowerCase() : b[order]
                    if ( compareA < compareB ){
                        return -1;
                    }
                    if ( compareA > compareB ){
                        return 1;
                    }
                    return 0;
                    }
            );
        }
        return listHeroes.slice(0, limit)
    },
    async searchHeroes({filter, query}: ISearchHeroesParams) {
        const service = Service.getInstance();
        const listHeroes = await service.getAllSuperHeroes()        
        return listHeroes.filter((hero) => {
            let attributes = [];
            switch (filter) {
                case "name":
                    attributes = [hero.name]
                    break;
                case "appearance":
                    attributes =  [hero.gender, hero.race, hero.height, hero.weight, hero.eyeColor, hero.hairColor]
                    break;
                case "biography":
                    attributes = [hero.fullName, hero.alterEgos, hero.aliases, hero.placeOfBirth, hero.firstAppearance, hero.publisher, hero.alignment]
                    break;
                case "work":
                    attributes = [hero.occupation, hero.base]
                    break;
                case "connections":
                    attributes = [hero.groupAffiliation, hero.relatives]
                    break;
                default:
                    attributes = Object.values(hero)
            }
            const result = attributes.filter(
                (value) => {      
                    if(value === null) return false;
                    return value.toString().toLowerCase().indexOf(query.toLowerCase()) != -1;
                }
            )
            if(result.length != 0) return true;
            return false;
        })
    }
}

export default hero