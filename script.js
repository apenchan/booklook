var fetch = function() {
  var value = $('#search-input').val();
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + value,
    success: function(data) {
      console.log(data);
      if (data.totalItems > 0) {
        renderBook({
          title: data.items[0].volumeInfo.title,
          description: data.items[0].volumeInfo.description ? data.items[0].volumeInfo.description : "No description",
          author: data.items[0].volumeInfo.authors[0],
          image: data.items[0].volumeInfo.imageLinks ? data.items[0].volumeInfo.imageLinks.thumbnail : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1476887192i/20893894.jpg"
        })
      } else{
        alert("book " + value + " doesnt exist idiot")
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};



function renderBook(data) {
  var $booksContainer = $('.books-container');
  $booksContainer.empty()
  console.log(data);
  var image = '<img src="' + data.image + '">';
  //var image = $('image').attr('src', 'http://books.google.com/books/content?id=hlb_sM1AN0gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
  var newDiv = '<div class="book-info">' + data.title + "<br>" + data.description + "<br>" + data.author + "<br>" + image + '</div>';
  $booksContainer.append(newDiv)
}

// var fetch = function () {
//   var isbn = $('#search-input').val();
//   $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q='+ isbn,
//     success: function(data) {
//       console.log(data);
//       var image;
//       if(data.items[0].volumeInfo.imageLinks){
//         image = items[0].volumeInfo.imageLinks.thumbnail
//       } else {
//         image = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1476887192i/20893894.jpg"
//       }
//       renderBook({
//         title: data.items[0].volumeInfo.title,
//         description: data.items[0].volumeInfo.description,
//         author: data.items[0].volumeInfo.authors[0],
//         image: image
//       })
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(textStatus);
//     }
//   }); 
// };


// var fetch = function () {
//   $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function(data) {
//       renderBook({
//         title: data.items[0].volumeInfo.title,
//         description: data.items[0].volumeInfo.description,
//         author: data.items[0].volumeInfo.authors[0],
//         image: data.items[0].volumeInfo.imageLinks.thumbnail
//       })
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(textStatus);
//     }
//   }); 
// };