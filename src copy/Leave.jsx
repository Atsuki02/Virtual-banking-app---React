import { useState } from "react";

function Leave({ state, dispatch, userDeposit }) {
  const [days, setDays] = useState(0);
  const interest = 0.08;
  return (
    <div id="page6">
      <div className="days-page">
        <div className="days-title">
          <h1 className="">How many days will you be gone?</h1>
        </div>
        <div className="days-amount">
          <input
            id="days-gone"
            type="number"
            name="days"
            placeholder="0 days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>
        <div className="next-page">
          <button
            className="go-back"
            onClick={() => dispatch({ type: "account/main" })}
          >
            Go Back
          </button>
          <button
            className="next"
            onClick={() =>
              dispatch({
                type: "account/main",
                payload: Math.floor(
                  userDeposit + (userDeposit * interest * days) / 365
                ),
              })
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leave;
