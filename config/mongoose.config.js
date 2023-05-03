require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to DB`))
    .catch((err) => console.log("no connection to db:", err))
