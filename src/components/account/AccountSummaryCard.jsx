import { useContext } from "react";
import { AccountContext } from "../../context";
import { TransactionsList } from "./TransactionsList";

export const AccountSummaryCard = () => {
  const { state } = useContext(AccountContext);

  return (
    <div className="account-summary-card">
      <p>Account Number</p>
      <p>Available Balance In Cents</p>
      <TransactionsList />
    </div>
  );
};
