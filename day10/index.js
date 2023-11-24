const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) =>{

    res.send('hello world anjnanay')
})
app.get('/about', (req, res) => {
  res.send("geloooo")
})

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`)
})