import express from 'express'

const app = express()

app.get('/', (req, res) => {
   return res.send('HELLO WORLDDDDD')
})

app.listen(3333, () => console.log("Server running"))