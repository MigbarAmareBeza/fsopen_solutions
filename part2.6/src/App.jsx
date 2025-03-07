import { useState } from 'react'


const Numbers = ({persons}) => {
  return (
    <>
      {persons.map((person,idx) => <li key={idx}>{person.name} {person.number}</li>)}
    </>
  )

}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: "22323"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('0-102')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  const onChangeHandler = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value);
  }

  const onNumberChangeHandler = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }
  
  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    setShowAll(false);

  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!persons.find((person) => person.name == newName)) {
      setPersons(persons.concat({name: newName, number: newNumber}));
      setNewName('');
      setNewNumber('');
    } else {

      window.alert(`${newName} is already added to the phonebook.`);
    }

  }

  const numbersToShow = showAll ? persons : persons.filter(person => person.name.includes(search) || person.number.includes(search));


  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        filter shown with <input value={search} onChange={onSearchChange}/>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          {console.log(persons)}
          name: <input value={newName} onChange={onChangeHandler}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={numbersToShow} />
    </div>
  )
}

export default App