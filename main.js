var books = [
  // {
  //   title: "Harry Potter",
  //   author: "J.K. Rowling",
  //   imageURL: "https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //   isbn: "9781921479311",
  //   pageCount: 268
  // }
];

var fetch = function (query) {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=" + query,
    dataType: "json",
    success: function(data) {
      addBooks(data.items);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

// renders books
var renderBooks = function() {
  $(".books").empty();

  for (var i = 0; i < books.length; i++) {
    var source = $("#book-template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(books[i]);
    $('.books').append(newHTML);
  }
};

var addBooks = function (data) {
  books = [];

  for (var i = 0; i < data.length; i++) {
    var bookData = data[i];

    var author = function () {
      if (bookData.volumeInfo.authors) {
        return bookData.volumeInfo.authors[0];
      } else {
        return null;
      }
    };

    var imageURL = function () {
      if (bookData.volumeInfo.imageLinks) {
        return bookData.volumeInfo.imageLinks.thumbnail;
      } else {
        return null;
      }
    };

    var isbn = function () {
      if (bookData.volumeInfo.industryIdentifiers) {
        return bookData.volumeInfo.industryIdentifiers[0].identifier;
      } else {
        return null;
      }
    };

    var pageCount = function () {
      if (bookData.volumeInfo.pageCount) {
        return bookData.volumeInfo.pageCount;
      } else {
        return null;
      }
    };

    var title = function () {
      if (bookData.volumeInfo.title) {
        return bookData.volumeInfo.title;
      } else {
        return null;
      }
    };

    var book = {
      title: title(),
      author: author(),
      imageURL: imageURL(),
      pageCount: pageCount(),
      isbn: isbn()
    };

    books.push(book);
    renderBooks();

  }

};



$('.search').on('click', function() {
  var search = $('#searh-query').val();

  fetch(search);
})

renderBooks();
