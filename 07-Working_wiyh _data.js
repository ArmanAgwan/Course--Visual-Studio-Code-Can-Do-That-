
//                      //----------Working with data----------//


// Apps have data. At least most of them do. Even if you're strictly a frontend developer, the time is going to come sooner or later when you have to work with a database of some sort. Traditionally, databases are a black box that you interface with via a network protocol or command line tool. In some instances, there are third party GUI's that you can install. With VS Code, you can bring most database providers right into your editor.

// In this section, you'll learn how to connect to various data providers, visually interact with your data stores and run queries right from the same place you run your code.

// Open the "exercise-7-working-with-data/start" folder.

// This section does not have a "solution" folder. All work will be done in the start folder.

// Copy
// cd exercise-7-working-with-data/start
// code .
// This project uses Remote Containers to deliver Mongo DB and MySQL as databases without you having to install anything. It's like magic.

// After VS Code opens...

// **Open the Command Palette (Cmd/Ctrl + Shift + P)

// **Select "Remote-Containers: Reopen Folder in Container"


                  //----------Working with MongoDB----------//


// MongoDB is a popular document database that is commonly used in JavaScript applications. The project in the "start" folder has been modified to write values to a MongoDB database. That database doesn't exist. You'll need to create it, run the application a few times, and then query it to ensure that there are records being saved.

// Exercise   Answer

// * Open the Cosmos DB extension

// * Connect to "mongodb://mongo"

// * Create a new database called "lamp"

// * Create a new collection called "colors"

// * Run the application with npm start

// * Change the colors a few times

// * Open a new Mongo DB scrapbook

// * Query the "colors" collection to see the records


                  //----------Working with SQLite----------//


// SQLite is a lightweight file based database that supports SQL queries. Create a new SQLite database in the container and execute some commands against it.

// Exercise   Answer

// * Open the integrated terminal and browse to "/"

// * Create a folder called "data"

// * Move into that folder and create a new SQLite database with sqlite3 lamp.db

// * Connect to the database with the SQLite Extension

// * Create a new table called "colors"

// * Insert a few records

// * Select the records back out



//                        //----------Working with MySQL----------//


// MySQL, SQL Server and others are all common transactional database systems. VS Code has extensions for most of these. In this exercise, you'll connect to a MySQL database, execute queries and view the results in VS Code.

// Exercise  Answer

// * Connect to the "mysql" container with the MySQL extension

//       ** username: root

//       ** password: example

// * Execute the queries in the "mysql.sql" file

// * View the query result