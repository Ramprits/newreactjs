import React, { Fragment } from "react";
import DynamicForm from "../dynamicForms";
import { Row, Col } from "reactstrap";
import { LoginValidation } from "../../utils/validations";

const Login = () => {
  const Login = [
    { label: "User Name", type: "text", name: "userName", value: "" },
    { label: "Password", type: "password", name: "password", value: "" }
  ];

  const handleLogin = data => {
    console.log(data);
  };

  return (
    <Fragment>
      <Row className="animated fadeIn">
        <Col md="8" className="offset-md-2">
          <DynamicForm
            title="Welcome back"
            fields={Login}
            validation={LoginValidation}
            submitting={handleLogin}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
