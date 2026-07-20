import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import { ContactProvider } from "./components/ContactContext";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>

            <Route index element={<Contacts />} />

            <Route path="/add-contact" element={<AddContact />} />

            <Route path="/edit/:id" element={<AddContact />} />

        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContactProvider>
            <RouterProvider router={router} />
        </ContactProvider>
    </React.StrictMode>
);