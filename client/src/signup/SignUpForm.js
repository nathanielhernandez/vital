import Input from "../components/input/Input";

const SignUpForm = (props) => {
  const values = props.values;
  const {
    accountType,
    firstName,
    lastName,
    businessName,
    email,
    password,
    confirmPassword,
  } = values;
  const onSubmit = props.onSubmit;
  const handleChange = props.handleChange;
  const isLoading = props.isLoading;

  if (accountType === "Personal") {
    return (
      <div className="form-layout-centered">
        <div className="form-layout-horizontal">
          <Input
            type={"text"}
            name={"firstName"}
            labelText={"First Name"}
            value={firstName}
            handleChange={handleChange}
          />
          <Input
            type={"text"}
            name={"lastName"}
            labelText={"Last Name"}
            value={lastName}
            handleChange={handleChange}
          />
        </div>
        <Input
          type={"text"}
          name={"email"}
          labelText={"E-mail"}
          value={email}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          labelText={"Password"}
          value={password}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          name={"confirmPassword"}
          labelText={"Confirm Password"}
          value={confirmPassword}
          handleChange={handleChange}
        />
        <div className="form-layout-horizontal">
          <select name="month" id="mm">
            <option value="Month">Month</option>
          </select>
          <select name="day" id="dd">
            <option value="Day">Day</option>
          </select>
          <select name="year" id="yyyy">
            <option value="Year">Year</option>
          </select>
        </div>
        <button
          className="btn large-btn"
          onClick={onSubmit}
          disabled={isLoading}
        >
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="form-layout-centered">
      <Input
        type={"text"}
        name={"businessName"}
        labelText={"Business Name"}
        value={businessName}
        handleChange={handleChange}
      />
      <Input
        type={"text"}
        name={"email"}
        labelText={"E-mail"}
        value={email}
        handleChange={handleChange}
      />
      <Input
        type={"password"}
        name={"password"}
        labelText={"Password"}
        value={password}
        handleChange={handleChange}
      />
      <Input
        type={"password"}
        name={"confirmPassword"}
        labelText={"Confirm Password"}
        value={confirmPassword}
        handleChange={handleChange}
      />
      <button className="btn large-btn" onClick={onSubmit} disabled={isLoading}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;
