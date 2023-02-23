const express = require('express') 
const app = express() 
const port = 8000
const morgan = require("morgan")
const appRoute = require("./routes/app.routes")



app.use(morgan());
app.use(express.json());


app.use(appRoute);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 