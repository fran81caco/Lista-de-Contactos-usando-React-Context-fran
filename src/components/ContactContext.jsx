import React, { createContext, useEffect, useState } from "react";

export const ContactContext = createContext();

const API_URL = "https://playground.4geeks.com/contact/agendas/Francisco/contacts";

export const ContactProvider = ({ children }) => {

    const [contacts, setContacts] = useState([]);

    // GET CONTACTS
    const getContacts = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setContacts(data.contacts || []);
        } catch (error) {
            console.log("Error al obtener contactos:", error);
        }
    };

    // CREATE CONTACT
    const createContact = async (contact) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });

            getContacts();
        } catch (error) {
            console.log("Error al crear contacto:", error);
        }
    };

    // DELETE CONTACT
    const deleteContact = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            getContacts();
        } catch (error) {
            console.log("Error al eliminar contacto:", error);
        }
    };

    // UPDATE CONTACT
    const updateContact = async (id, updatedContact) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedContact)
            });

            getContacts();
        } catch (error) {
            console.log("Error al actualizar contacto:", error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <ContactContext.Provider
            value={{
                contacts,
                getContacts,
                createContact,
                deleteContact,
                updateContact
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};