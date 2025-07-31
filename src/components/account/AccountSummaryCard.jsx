import { TransactionsList } from "./TransactionsList";

export const AccountSummaryCard = () => {
  return (
    <div className="account-summary-card">
      <p>Account Number</p>
      <p>Available Balance In Cents</p>
      <TransactionsList />
    </div>
  );
};
