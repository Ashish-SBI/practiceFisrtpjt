import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  console.log(contacts);
  const renderContactLlist = contacts.map((contact) => {
    return (
     <ContactCard contact={contact}/>
    );
  });
  return <div className="ui celled list">{renderContactLlist}</div>;
};

export default ContactList;
