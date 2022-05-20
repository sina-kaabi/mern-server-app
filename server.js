const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()



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

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


// route

//wildcard route
app.get('*', (req,res) => {
    res.json({
            data: 'You reached nodejs api for react node crud app'
        })
})


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

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`Server is listening at ${port}`))




