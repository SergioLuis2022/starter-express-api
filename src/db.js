const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
;(async () => {
  try {
    console.log("QUIERO CONECTARME A LA BD !!!")
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('MongoDB connected to', db.connection.host)
  } catch (err) {
    console.log(err)
  }
})()