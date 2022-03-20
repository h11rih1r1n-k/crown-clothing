import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Divider from "../../components/divider/divider.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="forgot-password">
          <Link className="forgot-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>

        <Divider text="or" />

        <div className="register">
          <div>New to fashion code?</div>
          <Link className="create-user" to="/signup">
            Create User
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
