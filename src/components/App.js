import React,{useState} from 'react'
import '../App.css'
import Header from './Header'
import ContactList from './ContactList'
import AddContact from './AddContact'

function App() {
  const [contacts ,setContacts] = useState([])
  const addContactHandler = (contact) =>{
    setContacts(...contacts , contact)
  }
 
  return (
    <div className="ui container">
      <h1>THIS IS MY APP</h1>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
     
    </div>
  );
}

export default App;
