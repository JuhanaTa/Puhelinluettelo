const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(express.json())

morgan.token('person', (request, response, next) => {
    return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      }
]


let date = new Date()

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people </p>
    <p>Time is: ${date}</p>`)
  })

app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })



  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    const names = persons.map(person => person.name)

    if(body.name.length === 0 || body.number.length <= 6){
        return response.status(400).json({ 
            error: 'name must be at least one character and number at least 7' 
          })
    }
    else if(names.includes(body.name) === false)
    {
        const person = {
            name: body.name,
            number: body.number ,
            id: Math.floor(Math.random() * 10000)  ,
          }

          persons = persons.concat(person)
  
        response.json(person)
    }
    else
    {
        return response.status(400).json({ 
            error: 'name must be unique' 
          })
    }
    
    
  })
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})