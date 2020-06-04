

function bookSearch(){

    var search = document.getElementById("search").value;
    document.getElementById("results").innerHTML = "";

    if (search == "") {
      alert("please input the search field");
    }else{

    $.ajax({
	   // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
  }
  };

  window.onload=function() {

  // menambhkan event ke elemen dengan id="button"
  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', bookSearch, false);


  }

function searchFiction() {
      var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:fiction",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);          
        };
      }
    });
    }
}

function searchPoetry() {  
      var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Poetry",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchFantasy() {
      var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchRomance() {
      var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Romance",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchAdult() {
   var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Adult",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchAnthologies() {
   var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Anthologies",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchArt() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Art",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchAudiobooks() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Audiobooks",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchBiographies() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Biographies",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchBody() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Body",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchBusiness() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Business",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchChildren() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Children",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchComics() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Comics",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchContemporary() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Contemporary",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchCooking() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Cooking",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchCrime() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Crime",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchEngineering() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Engineering",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchEntertainment() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Entertainment",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchFood() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Food",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchGeneral() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:General",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchHealth() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Health",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchHistory() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:History",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchHorror() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Horror",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchInvesting() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Investing",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchLiterary() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Literary",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchLiterature() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Literature",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchManga() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Manga",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchMedia_help() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Media-help",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchMemoirs() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Memoirs",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchMind() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Mind",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchMystery() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Mystery",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchNonfiction() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Nonfiction",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchReligion() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Religion",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchScience() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Science",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchSelf() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Self",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchSpirituality() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Spirituality",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchSports() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Sports",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchSuperheroes() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Superheroes",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchTechnology() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Technology",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchThrillers() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Thrillers",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchTravel() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Travel",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchWomen() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Women",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}

function searchYoung() {
     var results = document.getElementById("results");
      if (results !== null) {
        $("#results").empty();
        console.clear();
      $.ajax({
      // API Google Books
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:Young",
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // membuat elemen buku
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // menambahkan kelas ke elemen buku
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // menambahkan teks ke dalam tag
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'Show details';

          // menambahkan atribut
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // memunculkan gambar thumbnail buku, jika ada
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/Nobook.jpg'; // jika ada tidak ada
          };

          // memunculkan tanggal publikasi jika ada
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'No publish date found'; // jika ada tidak ada
          };

          // memunculkan nama pengarang, jika ada
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'No author found'; // jika ada tidak ada
          };

          // menambahkan tag ke dalam dokumen
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // menampilkan hasil ke index
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
    }
}