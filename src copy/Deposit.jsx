import React, { useState } from "react";

function Deposit({ state, dispatch, userDeposit }) {
  const [deposit, setDeposit] = useState(0);
  return (
    <div id="page5">
      <div className="deposit-page">
        <div className="deposit-title">
          <h1 className="">Please Enter The Deposit Amount</h1>
        </div>
        <div className="deposit-amount">
          <input
            type="number"
            name="deposit"
            placeholder="$105.00"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
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
              dispatch({ type: "account/main", payload: userDeposit + deposit })
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
