require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, Middleware
app.use(errorHandler)


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.get('/', function(req,res){
  
      res.send('Hello Ruslan!');
    
    });
    
    app.listen(PORT,  function(err){

      if (!err)
        console.log (`Crypto Server (cryptoforest) started on PORT = ${PORT}`);
      else console.log(err)
    
    });
  } catch (e) {
    console.log(e)
  }

}

start()

