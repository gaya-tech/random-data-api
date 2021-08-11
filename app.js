const express = require('express');
const {dataMaker} = require('./makeRandomData')
const app = express()


app.get("/api/v1/random-data/:number", (req, res) => {
    let data= dataMaker( req.params.number)
    return res.json({
        number: req.params.number,
        data: data
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running at http://127.0.0.1:${PORT}`))