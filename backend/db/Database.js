const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;







/*const mongoose = require("mongoose");

const connectDatabase = () => { //mongodb+srv://admin:admin123@cluster0.bgtkqga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  mongoose       
    .connect("mongodb+srv://admin:admin123@cluster0.bgtkqga.mongodb.net/db_app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
*/


