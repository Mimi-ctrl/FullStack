import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleShowChange = (event) => {
    setShow(event.target.value)
  }

  const showPersons = persons.filter(person =>
    person.name.toLowerCase().includes(show.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm show={show} handleShowChange={handleShowChange} />
      <h2>add a new</h2>    
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {showPersons.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </div>
  )
}

export default App
