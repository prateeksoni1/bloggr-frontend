import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Column, Card, Button } from "../components";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

const SignupScreen = () => {
  const accountValidator = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(4, "Password is too short")
      .required("Password is required"),
    confirmPassword: Yup.string().test(
      "password-match",
      "Passwords do not match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  });

  const handleSubmit = (values) => {};

  return (
    <StyledContainer>
      <Column style={{ height: "100%" }}>
        <StyledInnerContainer>
          <Card style={{ width: "40%" }}>
            <StyledContent>
              <h1>CREATE ACCOUNT</h1>
              <div className="form">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    agree: false,
                  }}
                  validationSchema={accountValidator}
                >
                  {({ handleChange }) => (
                    <Form>
                      <Input
                        labelText="Email"
                        name="email"
                        onChange={handleChange}
                      />
                      <Input
                        labelText="Password"
                        name="password"
                        onChange={handleChange}
                      />
                      <Input
                        labelText="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                      />
                      <Checkbox
                        labelText="I agree to terms and conditions"
                        name="agree"
                        onChange={handleChange}
                      />
                      <Button>
                        <div>Continue</div>
                        <img
                          src={require("../assets/arrow-right.png")}
                          alt="arrow-right"
                        />
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </StyledContent>
          </Card>
        </StyledInnerContainer>
      </Column>
    </StyledContainer>
  );
};

export default SignupScreen;

const StyledContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(39, 174, 96, 0.35) 0%,
      rgba(39, 174, 96, 0.35) 100%
    ),
    url(${require("../assets/signup1.jpg")});
`;

const StyledInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  padding: 2em;

  h1 {
    text-align: center;
  }

  .form {
    label {
      margin-bottom: 5px;
    }

    input {
      margin-bottom: 1em;
    }
  }

  Button {
    margin-top: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1em;
    padding-right: 1em;
    text-align: center;

    div {
      flex: 1;
    }
  }
`;
