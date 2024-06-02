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
            backgroundColor: 'blue',
            borderRadius: '5px', 
            color: 'red', 
          }}
          >add</button>
      </div>
    </form>
  )
  
  export default PersonForm
