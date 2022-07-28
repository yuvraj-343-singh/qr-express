const express = require('express')
var QRCode = require('qrcode')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/', async (req, res) => {
    try {
        console.log(req.query)
        // Data to be encoded in QR
        const data = {
            id: 51,
            name: req.query.name
        }
        // Generate QR base64 from string
        const qr = await QRCode.toDataURL(JSON.stringify(data), { scale: 20 })
        res.send({ qr })
    } catch (err) {
        res.send({ err: err.message })
    }
})

app.listen(port, () => {
    console.log(`QR app listening on port ${port}`)
})