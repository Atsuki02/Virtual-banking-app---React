import React from "react";

function ConfirmationPage({
  oneHundredBill,
  fiftyBill,
  twentyBill,
  tenBill,
  fiveBill,
  oneBill,
  totalBill,
  dispatch,
  userDeposit,
}) {
  return (
    <div id="page4">
      <div className="confirmation-page">
        <div className="confirmation-title">
          <h1 className="">The money you are going to take is ...</h1>
        </div>
        <div className="confirmation-amount-money">
          <div className="confirmation-section">
            <p className="confirmation-unit">{oneHundredBill} × $100</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-unit">{fiftyBill} × $50</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-unit">{twentyBill} × $20</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-unit">{tenBill} × $10</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-unit">{fiveBill} × $5</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-unit">{oneBill} × $1</p>
          </div>
          <div className="confirmation-section">
            <p className="confirmation-total">total: ${totalBill}</p>
          </div>
        </div>
        <div className="available-amount">
          <p className="available-amount-title">Total to be withdrawn:</p>
          <p className="available-amount-total">${totalBill}</p>
        </div>
        <div className="confirm-button">
          <button
            className="go-back-button"
            onClick={() => dispatch({ type: "account/withdraw" })}
          >
            Go Back
          </button>
          <button
            className="confirm"
            onClick={() =>
              dispatch({
                type: "account/main",
                payload: userDeposit - totalBill,
              })
            }
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
