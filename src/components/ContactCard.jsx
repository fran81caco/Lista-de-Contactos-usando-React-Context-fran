import React, { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {

    const navigate = useNavigate();
    const { deleteContact } = useContext(ContactContext);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Eliminar contacto?");
        if (confirmDelete) {
            deleteContact(contact.id);
        }
    };

    return (
        <div className="card p-3 mb-3">
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <p>{contact.address}</p>

            <div className="d-flex gap-2">

                <button 
                    className="btn btn-warning"
                    onClick={() => navigate(`/edit/${contact.id}`)}
                >
                    Editar
                </button>

                <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>

            </div>
        </div>
    );
};

export default ContactCard;