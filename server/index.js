const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()


app.use(express.json())
app.use(express.static(__dirname + `/../public/build`))



const messagesBaseUrl = "/api/messages" //this is so if the url ever changes we don't have to update in 4 different places.
app.post(messagesBaseUrl, mc.create) //endpoints 
app.get(messagesBaseUrl, mc.read)    
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete) //URL parameter of ID

const port = 3001
app.listen(port, ()=> { console.log(`Server is listening on port ${port}`)})