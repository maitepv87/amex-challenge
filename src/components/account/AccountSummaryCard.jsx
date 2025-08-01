import { useContext } from "react";
import { AccountContext } from "../../context";
import { TransactionsList } from "./TransactionsList";

export const AccountSummaryCard = () => {
  const { state } = useContext(AccountContext);

  return state.activeAccount?.accountNumber ? (
    <div className="account-summary-card">
      <p>Account Number - {state.activeAccount.accountNumber}</p>
      <p>Available Balance - {state.activeAccount.availableBalanceInCents}</p>

      <TransactionsList transactions={state.activeAccount.transactions} />
    </div>
  ) : (
    <p className="empty-state">Please select an account</p>
  );
};
