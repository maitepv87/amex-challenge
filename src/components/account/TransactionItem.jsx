import { formatAmountInDollars } from "../../utils/formatAmountInDollars";

export const TransactionItem = ({ name, transactionDate, amountInCents }) => {
  return (
    <div className="transaction-item">
      <p className="transaction-date">{transactionDate}</p>
      <div className="transaction-details">
        <p className="transaction-name">{name}</p>
        <p className="transaction-amount">
          {formatAmountInDollars(amountInCents)}
        </p>
      </div>
    </div>
  );
};
