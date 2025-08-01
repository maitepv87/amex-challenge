import { formatAmountInDollars } from "../../utils/formatAmountInDollars";

export const AccountSummaryCard = ({ account }) => {
  return (
    <div className="account-summary-card">
      <h2>Account Summary</h2>
      <h4>Available Balance</h4>
      <p>{formatAmountInDollars(account.availableBalanceInCents)}</p>
    </div>
  );
};
