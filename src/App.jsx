import ConfirmationPage from "./ConfirmationPage";
import Deposit from "./Deposit";
import Leave from "./Leave";
import Login from "./Login";
import MainBankAccount from "./MainBankAccount";
import Withdraw from "./Withdraw";
import { useApp } from "./AppContext";

function App() {
  const { status } = useApp();
  return (
    <>
      {status === "account/login" && <Login />}
      {status === "account/main" && <MainBankAccount />}
      {status === "account/withdraw" && <Withdraw />}
      {status === "account/confirmation" && <ConfirmationPage />}
      {status === "account/deposit" && <Deposit />}
      {status === "account/leave" && <Leave />}
    </>
  );
}

export default App;
