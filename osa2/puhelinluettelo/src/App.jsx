import { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (person) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(person.id, nameObject)
          .then(updatePerson => {
            setPersons(persons.map(per => per.id !== person.id ? per : updatePerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personsService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
        <Person 
        key={index}
        person={person} 
        deletePerson={() => deletePerson(person.id)}
        />
      ))}
    </div>
  )
}

export default App
