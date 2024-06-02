const Person = ({ person, deletePerson}) => (
  <div>
    {person.name} {person.number}
    <button 
      onClick={deletePerson}
      style={{
        backgroundColor: 'white',
        borderRadius: '5px', 
        color: 'red', 
      }}
      >delete</button>  
  </div>
)

export default Person
