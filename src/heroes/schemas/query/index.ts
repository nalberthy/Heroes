const queries = `type Query {
    listHeroes(limit: Int, order: String): [Hero]
    searchHeroes(query: String!, filter: Filter): [Hero]
}`

export default queries;