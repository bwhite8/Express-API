## Express-API
JSON-centric API written in Javascript, using Express.JS.  Facilitates CRD events for a hypothetical bookstore.
Utilizes in-memory storage.

## Get Started
Clone the repo and install the following dependencies:
- express
- multer
- body-parser

### Valid API Endpoints

    1. /books
      - GET 
        - retrieve a list of all books
      - POST 
        - add new book 
        - Ensure the following properties are provided: title, author, publisher, year, summary
        
    2. /books/:id
      - GET
        - retrieve a specific book in the list
      - DELETE
        - delete a specific book in the list
        
    3. /books/:id/publisher
      - GET
        - retrieve a specific book's publisher
        
    4. /books/:id/author
      - GET
        - retrieve a specific book's author
        
    5. /authors
      - GET 
        - retrieve a list of the authors in our collection
        
    6. /publishers
      - GET 
        - retrieve a list of the publishers in our collection
        
    7. /titles
      - GET
        - retrieve a list of book titles in our collection

### Components
- app.js
    - defines application
- routes.js
    - defines routes and in-memory storage

### Caveats
- Users are able to duplicate books in the library
- Query strings will not return values
