import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql";
import { resolvers } from "./heroes/controller";
import mutation from "./heroes/schemas/mutation";
import queries from "./heroes/schemas/query";
import superHero from "./heroes/schemas/types";

const schema = buildSchema(`${superHero} ${queries} ${mutation}`);

const expressGraphql = () => {
    return graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
      })
}

export default expressGraphql


