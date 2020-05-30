import { books } from "../src/data/books";
import { authors } from "../src/data/authors";
import { reviews } from "../src/data/reviews";

export const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    books() {
      return books;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    }
  },
  Book: {
    author: ({ author }) => {
      return authors.find((a) => {
        return a.id == author;
      });
    },
    reviews: (parent) => {
      return reviews.filter((review) => {
        return review.book == parent.id;
      });
    },
  },
  Author: {
    books : ({ id }) => {
      return books.filter((b) => {
        return b.author == id;
      });
    },
  },
  Review : {
    book : (parent) => {
      return books.find(book => {
        return book.id == parent.book
      })
    }
  }
};
