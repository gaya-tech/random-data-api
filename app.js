const express = require('express');
const {dataMakerSet} = require('./makeRandomData')
const cors = require('cors');
const app = express()

app.use(cors())

app.get("/api/v1/products/:number", (req, res) => {
    let data= dataMaker( req.params.number)
    if(req.params.number > 100) {
        return res.send({
            message: "Size must be smaller than 100"
        })
    } else {
        return res.json({
            number: req.params.number,
            data: data
        })
    }
   
})

app.get('*', (req,res) => {
    res.send({data: "Bad Request"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running at http://127.0.0.1:${PORT}`))