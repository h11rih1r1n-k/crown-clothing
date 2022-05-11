import "./form-input.styles.scss";

type FormInputTypes = {
  handleChange: () => {},
  label: string,
  value: string,
}

const FormInput = ({ handleChange, label, value, ...otherProps }: FormInputTypes) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
