# Eat da Burger

## How to Install Locally
First, you will need to run `npm install` in the Terminal where `server.js` is located. If you have a MySQL shell installed, run `source schema.sql` and `source seeds.sql` to initialize and populate the database. Otherwise, copy the code from both of these files into your SQL editor and run the code. Run the command `node server` and navigate to `http://localhost:8080/burgers` in your browser.

## How to Use
Add new burgers to the menu by typing in the name of the burger you want and clicking "Add Burger". Eat a burger by clicking "Eat da Burger!" next to the desired burger, at which point it will move over to the "Eaten Burgers" column.