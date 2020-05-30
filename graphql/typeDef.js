export const typeDefs = `
  type Query {
    hello(name: String): String!
    books: [Book!]!
    authors: [Author!]!
    reviews: [Review!]!
  }

  type Book {
    id: ID!
    title: String!
    author : Author!
    reviews : [Review]!
  }

  type Author {
    id: ID!
    name: String!
    books : [Book!]!
  }
  type Review {
    id: ID!
    review: String!
    book : Book!
  }

`;