import { IHero } from "../interface/hero";
import Service from "../service";

interface IListHeroesParams {
    limit?: number;
    order?: keyof IHero;
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
    }
}

export default hero