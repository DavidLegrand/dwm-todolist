import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const MyForm = () => {
  const initialValues = {
    email: "",
    password: "",
    language: "es",
    newsletter: true
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Merci d'entrer un email")
      .min(5, "L'email doit faire au moins 5 caractères.")
      .max(255, "L'email doit faire moins de 255 caractères.")
      .email("Merci d'entrer un email valide"),
    password: Yup.string()
      .required("Merci d'entrer un mot de passe")
      .min(3, "Le email doit faire au moins 3 caractères.")
      .matches(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/, "Votre email doit comporter au moins une majuscule, une minuscule, un chiffre"),
    language: Yup.string()
      .required("Merci de choisir la langue"),
    newsletter: Yup.bool().oneOf([true], "Merci d'accepter les CGU/CGV"),
  })
  const onSubmit = values => {
    console.log(values)
    //appel BDD / api ...
  }

  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <Form>
      <div>
        <Field type="text" name="email" placeholder="email"></Field>
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div>
        <Field type="text" name="password" placeholder="password"></Field>
        <ErrorMessage name="password"></ErrorMessage>
      </div>
      <div>Langue :
        <Field as="select" name="language">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Spanish</option>
        </Field>
        <ErrorMessage name="language"></ErrorMessage>
      </div>
      <div>J'accepte les CGU/CGV :
        <Field type="checkbox" name="newsletter"></Field>
        <ErrorMessage name="newsletter"></ErrorMessage>
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </Form>
  </Formik>;
};


export default MyForm;
