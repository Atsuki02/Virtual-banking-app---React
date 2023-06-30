import { useApp } from "./AppContext";

function MainBankAccount() {
  const {
    userFirstName,
    userLastName,
    userDeposit,
    dispatch,
  } = useApp();
  const min = 1000000;
  const max = 9999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div id="bankPage">
      <div id="page2">
        <div className="user-top">
          <div className="user-info">
            <p className="user-name">
              Your Name: {userFirstName} {userLastName}
            </p>
            <p className="user-id">Your Back ID: {randomNumber}</p>
            <p className="user-deposit">Your First Deposit: ${userDeposit}</p>
          </div>
          <div className="available-balance">
            <p className="available-balance-title">Available Balance</p>
            <p className="available-balance-amount">${userDeposit}</p>
          </div>
          <div className="items">
            <div
              className="withdrawal"
              onClick={() => dispatch({ type: "account/withdraw" })}
            >
              <h2>WITHDRAWAL</h2>
              <i className="fas fa-wallet fa-3x"></i>
            </div>
            <div
              className="deposit"
              onClick={() => dispatch({ type: "account/deposit" })}
            >
              <h2>DEPOSIT</h2>
              <i className="fas fa-coins fa-3x"></i>
            </div>
            <div
              className="comebacklater"
              onClick={() => dispatch({ type: "account/leave" })}
            >
              <h2>
                COMEBACK
                <br />
                LATER
              </h2>
              <i className="fas fa-home fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBankAccount;
