// routes.js
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~ In-Memory Data Store ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var books = [                                       // Library initially available

  { title : "American Sniper",
    author : "Chris Kyle",
    publisher : "HarperCollins",
    year : "2013",
    summary :"From 1999 to 2009, U.S. Navy SEAL Chris Kyle recorded the most " +
    "career sniper kills in United States military history. The Pentagon has " +
    "officially confirmed more than 150 of Kyles kills (the previous American " +
    "record was 109), but it has declined to verify the astonishing total number " +
    "for this book. Iraqi insurgents feared Kyle so much they named him al-Shaitan " +
    "('the devil') and placed a bounty on his head."
  },
  { title : "Zero to One",
    author :"Peter Thiel, Blake Masters",
    publisher : "Random House",
    year : "2014",
    summary : "Every moment in business happens only once. " +
    "The next Bill Gates will not build an operating system. " +
    "The next Larry Page or Sergey Brin won't make a search engine. " +
    "And the next Mark Zuckerberg won't create a social network. " +
    "If you are copying these guys, you aren't learning from them. " +
    "It's easier to copy a model than to make something new: doing what " +
    "we already know how to do takes the world from 1 to n, adding " +
    "more of something familiar"
    },
  { title : "Smartcuts",
    author : "Shane Snow",
    publisher : "HarperCollins",
    year : "2006",
    summary : "How do some startups go from zero to billions in mere months? " +
    "How did Alexander the Great, YouTube tycoon Michelle Phan, and Tonight Show " +
    "host Jimmy Fallon climb to the top in less time than it takes most of us to " +
    "get a promotion? What do high-growth businesses, world-class heart surgeons, " +
    "and underdog marketers do in common to beat the norm? One way or another, " +
    "they do it like computer hackers. They employ what psychologists call 'lateral " +
    "thinking: rethinking convention and breaking 'rules' that aren't rules."
    }
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Routes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

exports.default = function(req, res){

  res.statusCode = 200;
  return res.send('Welcome to the Bookstore API. Take a look at the README.md file on GitHub for a list of valid endpoints.')

};

exports.bookList = function(req, res){             // gets current library

  res.json(books);

};


exports.bookPost = function(req, res){            // add new book to library
                                                  // all properties must be provided
  if(!req.body.hasOwnProperty('title') ||
  !req.body.hasOwnProperty('author') ||
  !req.body.hasOwnProperty('publisher') ||
  !req.body.hasOwnProperty('year') ||
  !req.body.hasOwnProperty('summary')) {

    res.statusCode = 400;
    return res.send('Unable to Add Book, Not all required properties were provided.');

  } else {

    var newBook = {
      title : req.body.title,
      author : req.body.author,
      publisher : req.body.publisher,
      year : req.body.year,
      summary : req.body.summary
    };

    if (books.indexOf(newBook) < 0){                          // Doesn't work currently, books will get duplicated

      books.push(newBook);
      res.json('Your book has been added to our library.');

    } else {

      res.json('We already have that book!');

    }
  }
};

exports.bookIdGet = function(req, res){                       // gets book based on position in library

  if(books.length <= req.params.id || req.params.id < 0) {    // if the ID inputted is greater than the size of the library, or if the ID is less than 0, throw an error..

    res.statusCode = 404;
    return res.send('No Book Found, Invalid Book ID');

  } else {

    var wb = books[req.params.id];
    res.json(wb);
  }

};

exports.bookIdDel = function(req, res){        // delete book based on position in library

  if(books.length <= req.params.id) {         // if the ID inputted is greater than the size of the library, throw an error...

    res.statusCode = 404;
    return res.send('Unable to Delete, Invalid Book ID');

  } else {

    books.splice(req.params.id, 1);
    res.json('Book Deleted');

  }

};



exports.bookIdPublisher = function(req, res){               // gets publisher based on position in library

  if(books.length <= req.params.id || req.params.id < 0) {  // if the ID inputted is greater than the size of the library, or if the ID is less than 0, throw an error

    res.statusCode = 404;
    return res.send('No Publisher Found, Invalid Book ID');

  } else {

    res.json(books[req.params.id].publisher);

  }
};

exports.bookIdAuthor = function(req, res){                  // gets author based on position in the library

  if(books.length <= req.params.id || req.params.id < 0) {  // if the ID inputted is greater than the size of the library, or if the ID is less than 0, throw an error

    res.statusCode = 404;
    return res.send('No Author Found, Invalid Book ID');

  } else {

    res.json(books[req.params.id].author);

  }
};



exports.authors = function(req, res){               // gets all authors featured in the library

  var aValues = [];
  for (i = 0; i < books.length; i++) {

    if (aValues.indexOf(books[i].author) < 0) {     // if the author we're about to add doesn't already exist in our list, then it's ok to output..

      aValues[aValues.length] = books[i].author;

    }
  }

  res.json(aValues);

};

exports.publishers = function(req, res){            // gets all publishers featured in the library

  var pValues = [];
  for (i = 0; i < books.length; i++) {

    if (pValues.indexOf(books[i].publisher) < 0) {  // if the publisher we're about to output doesn't already exist in our list, then it's ok to output..

      pValues[pValues.length] = books[i].publisher;

    }
  }

  res.json(pValues);

};

exports.titles = function(req, res){            // gets all titles featured in the library

  var tValues = [];
  for (i = 0; i < books.length; i++) {

    if (tValues.indexOf(books[i].title) < 0) {  // if the title we're about to output doesn't already exist in our list, then it's ok to output..

    tValues[tValues.length] = books[i].title;

  }
}

res.json(tValues);

};
