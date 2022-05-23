const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://javascriptsina:Cash21077@cluster0.fjvmk.mongodb.net/?retryWrites=true&w=majorityl";
require('dotenv').config();


// import routes 

const postRoutes = require('./routes/post')

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl, connectionParams)
.then(() => {
  console.info("Connected to DB");
})
.catch((e) => {
  console.log("Error:", e);
});


// app

const app = express();

// db

// mongoose.connect(
//     process.env.DATABASE, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
// .then(() => console.log('DB connected'))
// .catch(err => console.log(err));

// middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


// route middleware

app.use('/api', postRoutes);



// try {
//     mongoose.connect(MONGODB_URI || 'mongodb://localhost/3001', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }, () =>
//       console.log("connected"));
//   } catch (error) {
//     console.log("could not connect");
//   }

//   mongoose
//    .connect(process.env.DATABASE, {})
//    .then(() => console.log("DB connected"))
//    .catch((err) => console.log("DB Error => ", err));


  // port

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is listening at ${port}`));




