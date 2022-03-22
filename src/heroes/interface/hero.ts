
export interface IHero extends IPowerstats, IAppearance, IBiography, IWork, IConnections, IImages {
    id: number;
    name: string;
    slug: string;
}

export interface IHeroResponse {
    id: number;
    name: string;
    slug: string;
    powerstats: IPowerstats;
    appearance: IAppearance;
    biography: IBiography;
    work: IWork;
    connections: IConnections;
    images: IImages;
}

export interface IPowerstats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}
export interface IAppearance {
    gender: string;
    race : string
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string
}

export interface IBiography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}

export interface IWork {
    occupation: string;
    base: string;
}

export interface IConnections {
    groupAffiliation: string;
    relatives: string;
}

export interface IImages{
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
