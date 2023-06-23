import React, { useState, useEffect } from "react";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory !!!");
      return;
    } else {
      const contact = { name, email };
    addContactHandler(contact);
    setName("");
    setEmail("");
    }
  };

  return (
    <div className="ui main">
      <h2>ADD CONTACT</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={updateName}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <button className="ui button blue" >
          ADD
        </button>
      </form>
    </div>
  );
};
export default AddContact;
