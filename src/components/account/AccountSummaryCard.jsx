export const AccountSummaryCard = ({ account }) => {
  return (
    <div className="account-summary-card">
      <p>Account Number - {account.accountNumber}</p>
      <p>Available Balance - {account.availableBalanceInCents}</p>
    </div>
  );
};
