import React, { Fragment } from "react";
import DynamicForm from "../dynamicForms";
import { Row, Col } from "reactstrap";
import { RegisterValidation } from "../../utils/validations";

const Signup = () => {
  const Login = [
    { label: "User Name", type: "text", name: "userName", value: "" },
    { label: "Email", type: "text", name: "email", value: "" },
    { label: "Password", type: "password", name: "password", value: "" }
  ];

  const handleSignup = data => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col md="8" className="offset-md-2">
            <DynamicForm
              title="Register"
              fields={Login}
              validation={RegisterValidation}
              submitting={handleSignup}
            />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Signup;
