import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { onClose, onOpen, isOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className=" ml-1 text-white text-3xl absolute" />
            <input
              onChange={filterContacts}
              type="text"
              placeholder="Search Contact"
              className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-10 font-bold"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
