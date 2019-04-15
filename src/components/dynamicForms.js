import React, { Component, Fragment } from "react";
import { Formik, Field } from "formik";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class DynamicForm extends Component {
  renderCheckBox(input) {
    return (
      <Fragment key={input.name}>
        <FormGroup check row>
          <Col sm={6} className="offset-2">
            <Label check>
              <Field
                name={input.name}
                render={prop => {
                  const { field } = prop;
                  return (
                    <Input
                      name={input.name}
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              {input.label}
            </Label>
          </Col>
        </FormGroup>
      </Fragment>
    );
  }

  renderTextArea(input) {
    return (
      <Fragment key={input.name}>
        <FormGroup row>
          <Label htmlFor={input.name} sm={2}>
            {input.label}
          </Label>
          <Col sm={6}>
            <Field
              name={input.name}
              render={props => {
                const { field } = props;
                const { errors, touched } = props.form;
                const hasError =
                  errors[input.name] && touched[input.name] ? "hasError" : "";
                return (
                  <div>
                    <textarea
                      className="form-control"
                      {...field}
                      id={hasError}
                    />
                  </div>
                );
              }}
            />
          </Col>
        </FormGroup>
        <div />
      </Fragment>
    );
  }

  renderSelect(input) {
    return (
      <Fragment key={input.name}>
        <FormGroup row>
          <Label htmlFor={input.name} sm={2}>
            {input.label}
          </Label>
          <Col sm={6}>
            <Field
              name={input.name}
              render={props => {
                const { field } = props;
                const { errors, touched } = props.form;
                const hasError =
                  errors[input.name] && touched[input.name] ? "hasError" : "";
                const defaultOption = (
                  <option key="default" value="Please Select">
                    Please Select
                  </option>
                );
                const options = input.data.map(i => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ));
                const selectOptions = [defaultOption, ...options];
                return (
                  <div className="dropdown">
                    <select value={field.value} {...field} id={hasError}>
                      {selectOptions}
                    </select>
                  </div>
                );
              }}
            />
          </Col>
        </FormGroup>
      </Fragment>
    );
  }

  renderFields(inputs) {
    return inputs.map(input => {
      if (input.type === "select") {
        return this.renderSelect(input);
      }

      if (input.type === "checkbox") {
        return this.renderCheckBox(input);
      }

      if (input.type === "textarea") {
        return this.renderTextArea(input);
      }

      return (
        <div key={input.name}>
          <FormGroup row>
            <Label htmlFor={input.name} sm={2}>
              {input.label}
            </Label>
            <Col sm={6}>
              <Field
                name={input.name}
                render={props => {
                  const { field } = props;
                  const { errors, touched } = props.form;
                  const hasError =
                    errors[input.name] && touched[input.name] ? "hasError" : "";
                  return <Input {...field} id={hasError} type="text" />;
                }}
              />
            </Col>
          </FormGroup>
        </div>
      );
    });
  }

  getInitialValues(inputs) {
    //declare an empty initialValues object
    const initialValues = {};
    //loop loop over fields array
    //if prop does not exit in the initialValues object,
    // pluck off the name and value props and add it to the initialValues object;
    inputs.forEach(field => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    //return initialValues object
    return initialValues;
  }

  render() {
    const initialValues = this.getInitialValues(this.props.fields);
    return (
      <React.Fragment>
        <Card className="w-100 mt-4">
          <CardBody>
            <CardTitle className="h3">{this.props.title}</CardTitle>
            <hr />
            <Formik
              onSubmit={values => {
                this.props.submitting(values);
              }}
              validationSchema={this.props.validation}
              initialValues={initialValues}
              render={form => {
                const errorMessageShow =
                  Object.keys(form.errors).length > 0 ? "error" : "hidden";
                return (
                  <Form onSubmit={form.handleSubmit}>
                    <div className={`${errorMessageShow} col-md-4 offset-2`}>
                      Please correct the errors below
                    </div>
                    {this.renderFields(this.props.fields)}
                    <Button
                      className="offset-2 mt-2"
                      type="submit"
                      size="sm"
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default DynamicForm;
