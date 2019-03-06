var books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    imageURL: "https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isbn: "9781921479311",
    pageCount: 268
  }
];


// renders books
var renderBooks = function() {
  $(".books").empty();

  for (var i = 0; i < books.length; i++) {
    // $(".books").append(books[i].title);
    // $(".books").append(books[i].author);
    // $(".books").append(books[i].isbn);
    // $(".books").append(books[i].imageURL)



  var source = $("#book-template").html();
  var template = Handlebars.compile(source);
  var newHTML = template(books[i]);
  $('.books').append(newHTML);
  }
};

renderBooks();
