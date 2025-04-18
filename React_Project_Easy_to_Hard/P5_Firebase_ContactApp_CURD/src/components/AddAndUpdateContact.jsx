import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          validationSchema={contactSchemaValidation}
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name">Name:</label>
                <Field name="name" className="border h-10" />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" className="border h-10" />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <button
                type="submit"
                className="bg-amber-500 px-3 py-1.5 mt-2 rounded-lg"
              >
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
