// https://64ae8589c85640541d4d3920.mockapi.io/api/v1/

import {Formik, Form, Field } from 'formik'

function MaterialEditorForm({ onSubmit, isSubmitting }){
    const handleSubmit = async (values, actions) => {
      await onSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm();
    };
  return (
    <Formik initialValues={{ title: '', link:''}} onSubmit={handleSubmit}>
     {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Ссылка
            <Field name="link" type="url" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MaterialEditorForm
