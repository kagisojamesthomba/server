const resolvers = {
  Author: {
    books(author, args, { dataSources }, info) {
      return dataSources.jsonServerApi.getAuthorBooks(author.id);
    },
  },

  Book: {
    authors(book, args, { dataSources }, info) {
      return dataSources.jsonServerApi.getBookAuthors(book.id);
    },
  },
  Query: {
    author(root, { id }, { dataSources }, info) {
      //fetch author by id
      return dataSources.jsonServerApi.getAuthorById(id);
    },

    authors(root, args, { dataSources }, info) {
      //fetch all authors
      return dataSources.jsonServerApi.getAuthors();
    },

    book(root, { id }, { dataSources }, info) {
      //fetch book by id
      return dataSources.jsonServerApi.getBookById(id);
    },
    books(root, args, { dataSources }, info) {
      //fetch all books
      return dataSources.jsonServerApi.getBooks();
    },
  },
};

export default resolvers;
