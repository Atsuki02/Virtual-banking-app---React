import { useReducer } from "react";
import ConfirmationPage from "./ConfirmationPage";
import Deposit from "./Deposit";
import Leave from "./Leave";
import Login from "./Login";
import MainBankAccount from "./MainBankAccount";
import Withdraw from "./Withdraw";

function App() {
  const initialState = {
    // "account/login", "account/main", "account/withdraw", "account/confirmation", "account/deposit", "account/leave"
    status: "account/login",
    userEmail: "",
    userFirstName: "",
    userLastName: "",
    userDeposit: 0,
    bankType: "",
    oneHundredBill: 0,
    fiftyBill: 0,
    twentyBill: 0,
    tenBill: 0,
    fiveBill: 0,
    oneBill: 0,
    totalBill: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "account/login":
        return initialState;
      case "account/main":
        return {
          ...state,
          status: "account/main",
          userEmail: action.payload?.email || state.userEmail,
          userFirstName: action.payload?.firstName || state.userFirstName,
          userLastName: action.payload?.lastName || state.userLastName,
          userDeposit:
            action.payload?.deposit || action.payload || state.userDeposit,
        };
      case "account/withdraw":
        return {
          ...state,
          status: "account/withdraw",
        };

      case "account/confirmation":
        return {
          ...state,
          status: "account/confirmation",
          oneHundredBill: action.payload.oneHundredBill,
          fiftyBill: action.payload.fiftyBill,
          twentyBill: action.payload.twentyBill,
          tenBill: action.payload.tenBill,
          fiveBill: action.payload.fiveBill,
          oneBill: action.payload.oneBill,
          totalBill: action.payload.totalBill,
        };
      case "account/deposit":
        return {
          ...state,
          status: "account/deposit",
        };
      case "account/leave":
        return {
          ...state,
          status: "account/leave",
        };
      default:
        throw new Error("Action unknown");
    }
  }

  const [
    {
      status,
      userFirstName,
      userLastName,
      userDeposit,
      oneHundredBill,
      fiftyBill,
      twentyBill,
      tenBill,
      fiveBill,
      oneBill,
      totalBill,
      state,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <>
      {status === "account/login" && <Login dispatch={dispatch} />}
      {status === "account/main" && (
        <MainBankAccount
          userFirstName={userFirstName}
          userLastName={userLastName}
          userDeposit={userDeposit}
          dispatch={dispatch}
        />
      )}
      {status === "account/withdraw" && (
        <Withdraw dispatch={dispatch} state={state} />
      )}
      {status === "account/confirmation" && (
        <ConfirmationPage
          oneHundredBill={oneHundredBill}
          fiftyBill={fiftyBill}
          twentyBill={twentyBill}
          tenBill={tenBill}
          fiveBill={fiveBill}
          oneBill={oneBill}
          totalBill={totalBill}
          state={state}
          dispatch={dispatch}
          userDeposit={userDeposit}
        />
      )}
      {status === "account/deposit" && (
        <Deposit state={state} dispatch={dispatch} userDeposit={userDeposit} />
      )}
      {status === "account/leave" && (
        <Leave state={state} dispatch={dispatch} userDeposit={userDeposit} />
      )}
    </>
  );
}

export default App;
