import React, { useContext } from "react";
import { ContactContext } from "../components/ContactContext";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
    const navigate = useNavigate();

    const { contacts } = useContext(ContactContext);

    return (
        <div className="mt-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h1>Lista de contactos</h1>

                <button
                    className="btn btn-success"
                   onClick={() => navigate("/add-contact")}
                >
                    Add Contact
                </button>
            </div>

            {contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}

        </div>
    );
};

export default Contacts;