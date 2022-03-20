import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendPasswordResetEmailStart } from "../../redux/user/user.actions";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./forgot-password.styles.scss";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetEmailStart(email));
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="forgot-password-page">
      <h2 className="title">Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <CustomButton>SEND PASSWORD RESET EMAIL</CustomButton>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
