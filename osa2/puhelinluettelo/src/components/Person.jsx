const Person = ({ person, deletePerson}) => (
  <div>
    {person.name} {person.number}
    <button 
      onClick={deletePerson}
      style={{
        backgroundColor: 'red',
        borderRadius: '5px', 
        color: 'blue', 
      }}
      >delete</button>  
  </div>
)

export default Person
