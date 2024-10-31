import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const PersonSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format is XXX-XX-XX")
    .required("Number is required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const handleAdd = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAdd}
      validationSchema={PersonSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldInput}>
          <label className={css.label} htmlFor={usernameId}>
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={usernameId}
            autocomplete="off"
          ></Field>
          <ErrorMessage className={css.alert} name="name" component="span" />
        </div>
        <div className={css.fieldInput}>
          <label className={css.label} htmlFor={numberId}>
            Number:
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
            autocomplete="off"
          ></Field>
          <ErrorMessage className={css.alert} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
