require('dotenv').config()
const express = require('express')
const cors = require('cors')
const portfolioRoutes = require ('./Routes/portfolioRoutes.js')
const path = require("path")

//rest object
//-----------
const app = express()

//Middlewares
//-----------
app.use(cors())
app.use(express.json())

// Static Files access
// -------------------
app.use(express.static(path.join(__dirname, '../client/dist')))

//Routes
//------
const staticPath = path.join(__dirname, '../client/dist');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(staticPath, 'index.html'));
});


//Port
//----
const PORT = process.env.PORT || 5000

//Listen
//------
app.listen(PORT, () => {
    console.log(`Server is running on the port: http://localhost:${PORT}`)
} )
