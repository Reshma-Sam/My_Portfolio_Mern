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
app.use(express.static(path.join(__dirname, '../ReshmaPortfolio/dist')))

//Routes
//------
app.use('/api/v1/portfolio',portfolioRoutes)

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "../ReshmaPortfolio/dist/index.html"))
})

//Port
//----
const PORT = process.env.PORT || 5000

//Listen
//------
app.listen(PORT, () => {
    console.log(`Server is running on the port: http://localhost:${PORT}`)
} )
