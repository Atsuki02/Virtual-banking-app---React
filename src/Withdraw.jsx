import { useState } from "react";
import { useApp } from "./AppContext";

function Withdraw() {
  const { dispatch } = useApp();
  const [oneHundredBill, setOneHundredBill] = useState("");
  const [fiftyBill, setFiftyBill] = useState("");
  const [twentyBill, setTwentyBill] = useState("");
  const [tenBill, setTenBill] = useState("");
  const [fiveBill, setFiveBill] = useState("");
  const [oneBill, setOneBill] = useState("");

  const totalBill =
    oneHundredBill * 100 +
    fiftyBill * 50 +
    twentyBill * 20 +
    tenBill * 10 +
    fiveBill * 5 +
    oneBill * 1;

  return (
    <div id="page3">
      <div className="withdrawal-page">
        <div className="withdrawal-title">
          <h1 className="">Please Enter The Withdrawal Amount</h1>
        </div>
        <div className="withdrawal-amount-selector">
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$100</p>
            <input
              type="number"
              className="bill-input"
              data-bill="100"
              name="100-dollar"
              value={oneHundredBill}
              onChange={(e) => setOneHundredBill(Number(e.target.value))}
            />
          </div>
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$50</p>
            <input
              type="number"
              className="bill-input"
              data-bill="50"
              name="50-dollar"
              value={fiftyBill}
              onChange={(e) => setFiftyBill(Number(e.target.value))}
            />
          </div>
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$20</p>
            <input
              type="number"
              className="bill-input"
              data-bill="20"
              name="20-dollar"
              value={twentyBill}
              onChange={(e) => setTwentyBill(Number(e.target.value))}
            />
          </div>
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$10</p>
            <input
              type="number"
              className="bill-input"
              data-bill="10"
              name="10-dollar"
              value={tenBill}
              onChange={(e) => setTenBill(Number(e.target.value))}
            />
          </div>
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$5</p>
            <input
              type="number"
              className="bill-input"
              data-bill="5"
              name="5-dollar"
              value={fiveBill}
              onChange={(e) => setFiveBill(Number(e.target.value))}
            />
          </div>
          <div className="withdrawal-section">
            <p className="withdrawal-unit">$1</p>
            <input
              type="number"
              className="bill-input"
              data-bill="1"
              name="1-dollar"
              value={oneBill}
              onChange={(e) => setOneBill(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="total-amount">
          <p>${totalBill}</p>
        </div>
        <div className="next-page">
          <button
            className="go-back back-btn"
            onClick={() => dispatch({ type: "account/main" })}
          >
            Go Back
          </button>
          <button
            className="next next-btn"
            onClick={() =>
              totalBill > 0
                ? dispatch({
                    type: "account/confirmation",
                    payload: {
                      oneHundredBill,
                      fiftyBill,
                      twentyBill,
                      tenBill,
                      fiveBill,
                      oneBill,
                      totalBill,
                    },
                  })
                : null
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
