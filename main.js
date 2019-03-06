var books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    imageURL: "https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isnb: "9781921479311",
    pageCount: 268
  }
];


// renders books
var renderBooks = function() {
  $(".books").empty();
  for (var i = 0; i < books.length; i++) {
    $(".books").append(books[i].title);

  }
};

renderBooks();
