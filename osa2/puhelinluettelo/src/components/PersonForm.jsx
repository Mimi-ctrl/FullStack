const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button 
          type="submit"
          style={{
            backgroundColor: 'white',
            borderRadius: '5px', 
            color: 'blue', 
          }}
          >add</button>
      </div>
    </form>
  )
  
  export default PersonForm
