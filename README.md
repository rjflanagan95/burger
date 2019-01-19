# Eat da Burger

## How to Install Locally
First, you will need to run `npm install` in the Terminal, in the `burger` directory where `server.js` is located.

After installing the node modules, you will need to pass your MySQL credentials into `connection.js`; you may do this either by 1) creating `keys.js` in the `burger` folder and having it export your password, or 2) enter your password directly in `connection.js`.

If you have a MySQL shell installed, run `source schema.sql` and `source seeds.sql` to initialize and populate the database. Otherwise, copy the code from both of these files into your SQL editor and run the code.

Run the command `node server` and navigate to `http://localhost:8080/burgers` in your browser.

## How to Use
Add new burgers to the menu by typing in the name of the burger you want and clicking "Add Burger". Eat a burger by clicking "Eat da Burger!" next to the desired burger, at which point it will move over to the "Eaten Burgers" column.
