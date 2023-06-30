import { useState } from "react";

function Login({ dispatch }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deposit, setDeposit] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "account/main",
      payload: {
        email,
        firstName,
        lastName,
        deposit,
      },
    });
  }

  return (
    <div id="initial-form">
      <div id="page0">
        <form className="create-account-form" onSubmit={handleSubmit}>
          <h1 className="title">Please type your information below</h1>
          <div className="account-info">
            <input
              type="text"
              name="userEmail"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="userFirstName"
              placeholder="First name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="userLastName"
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="first-deposit">
            <input
              type="number"
              name="userFirstDeposit"
              placeholder="Enter your first deposit"
              required
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userAccountType"
                id="userAccountType1"
                required
              />
              <label className="form-check-label" htmlFor="userAccountType1">
                Savings
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userAccountType"
                id="userAccountType2"
                required
              />
              <label className="form-check-label" htmlFor="userAccountType2">
                Checkings
              </label>
            </div>
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
