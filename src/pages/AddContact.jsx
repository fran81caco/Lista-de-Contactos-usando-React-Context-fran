import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../components/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        contacts,
        createContact,
        updateContact
    } = useContext(ContactContext);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    // Si hay ID → estamos editando
    useEffect(() => {
        if (id) {
            const contact = contacts.find(c => c.id == id);
            if (contact) {
                setFormData(contact);
            }
        }
    }, [id, contacts]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            await updateContact(id, formData);
        } else {
            await createContact(formData);
        }

        navigate("/");
    };

    return (
        <div className="mt-5">
            <h1 className="mb-4">
                {id ? "Editar Contacto" : "Agregar Contacto"}
            </h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control mb-3"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    className="form-control mb-3"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    className="form-control mb-3"
                    value={formData.address}
                    onChange={handleChange}
                />

                <button className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default AddContact;