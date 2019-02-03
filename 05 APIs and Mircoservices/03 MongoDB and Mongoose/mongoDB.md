**MongoDB** is a database that stores data records (documents) for use by an application. Mongo is a non-relational, `NoSQL` database. This means Mongo stores all data associated within one record, instead of storing it across many preset tables as in a SQL database. Some benefits of this storage model are:

    - **Scalability:** by default, non-relational databases are split (or "sharded") across many systems instead of only one. This makes it easier to improve performance at a lower cost.
    - **Flexibility:** new datasets and properties can be added to a document without the need to make a new table for that data.
    - **Replication:** copies of the database run in parallel so if one goes down, one of the copies becomes the new primary data source.

While there are many non-relational databases, Mongo's use of JSON as its document storage structure makes it a logical choice when learning backend JavaScript. Accessing documents and their properties is like accessing objects in JavaScript.

**Mongoose.js** is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make is easier to construct documents for storage in Mongo.
